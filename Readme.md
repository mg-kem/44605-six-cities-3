# Личный проект «Шесть городов»

* Студент: [Дмитрий Гилёв](https://up.htmlacademy.ru/react-individual/3/user/44605).
* Наставник: `Станислав Михайлов`.

---

## О проекте

«Шесть городов» — клиентское веб-приложение для поиска и просмотра объявлений по аренде жилья в шести городах Европы (Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf). Пользователь может выбирать город, сортировать предложения, просматривать карточки и страницу объявления, добавлять избранное (при авторизации) и входить в личный кабинет. Данные загружаются с бэкенда по API; авторизация и избранное работают через сервер.

---

## Стек технологий

| Категория | Технология |
|-----------|-------------|
| **Язык** | TypeScript |
| **Фреймворк** | React 18 |
| **Сборка** | Vite 4 |
| **Маршрутизация** | React Router DOM 6 |
| **Состояние** | Redux Toolkit (createSlice, createAsyncThunk), React-Redux |
| **HTTP-клиент** | Axios |
| **Карты** | Leaflet |
| **Мета-теги / SEO** | react-helmet-async |
| **Уведомления** | react-toastify |
| **Утилиты** | classnames, history, http-status-codes |
| **Тестирование** | Vitest, Testing Library, @testing-library/jest-dom, axios-mock-adapter, jsdom |

---

## Структура приложения и поток данных

### Точка входа

**`src/index.tsx`** — корень приложения:

- Создаёт React-корень и рендерит `<App />` внутри `<Provider store={store}>`.
- Store создаётся в **`src/store/index.ts`** (configureStore, rootReducer, api в extraArgument).
- При старте диспатчит `fetchOffersAsyncAction()` и `checkAuthLoginAsyncAction()` — загрузка офферов и проверка авторизации с бэкенда.
- Подключены ToastContainer (react-toastify) и глобальные стили уведомлений.
- Доступ к состоянию в компонентах — через `useAppSelector` / `useAppDispatch` из **`src/hooks/useStore.ts`**.

### Маршрутизация

**`src/app/app.tsx`** — определяет маршруты:

- Оборачивает приложение в `HelmetProvider` и `BrowserRouter`.
- **ScrollToTop** — при смене маршрута прокручивает страницу вверх.
- Основные страницы рендерятся внутри **Layout** (шапка и при необходимости футер).

| Путь | Компонент | Описание |
|------|-----------|----------|
| `/` | MainPage | Главная: список городов, карта, карточки предложений, сортировка |
| `/offer/:id` | OfferPage | Страница объявления: галерея, описание, карта, отзывы, «рядом» |
| `/login` | LoginPage | Страница входа (только для неавторизованных — PrivateRoute с isLoginPage) |
| `/favorites` | FavoritesPage | Избранное (только для авторизованных — PrivateRoute) |
| `*` | ErrorPage | 404 |

**Layout** (`src/components/layout/layout.tsx`):

- Шапка с логотипом и навигацией (Sign in / профиль и избранное / Sign out в зависимости от статуса авторизации из store).
- Рендерит дочерний маршрут через `<Outlet />`.
- Классы страницы и отображение футера задаются через **`getLayoutState(pathname)`** в **`src/utils/utils.ts`** (page--gray, page--main, page--login, футер на /favorites).

**PrivateRoute** (`src/components/private-route/private-route.tsx`):

- Для `/login`: при авторизации — редирект на `/`, иначе форма входа.
- Для `/favorites`: при неавторизованном пользователе — редирект на `/login`, иначе страница избранного.

### Управление состоянием (Redux)

- **Store** (`src/store/index.ts`): `configureStore`, `rootReducer` из `combineReducers`, в middleware передаётся экземпляр Axios (`createAPI()`) как `extraArgument` для thunk. Экспортируются типы `TState` и `TAppDispatch`.
- **Слайсы** (`src/store/slices/`):
  - **appSlice** — текущий город (`currentCity`), тип сортировки (`sorting`). Экшены: `changeCityAction`, `changeSortingAction`.
  - **offersSlice** — список офферов, оффер по id, офферы «рядом», флаги загрузки и ошибки. Обрабатывает thunk: загрузка офферов, оффера по id, офферов рядом, обновление при переключении избранного.
  - **userSlice** — данные пользователя, статус авторизации (`AuthorizationStatus`), загрузка и ошибка. Обрабатывает thunk: проверка логина, вход, выход.
  - **reviewsSlice** — список отзывов, загрузка, отправка отзыва, ошибки. Обрабатывает thunk: загрузка отзывов по id оффера, отправка отзыва.
  - **favoritesSlices** — список избранных офферов, загрузка и ошибка. Обрабатывает thunk: загрузка избранного, переключение избранного.
- **Thunk** (`src/store/thunks/`): асинхронные запросы к API (offers, user, reviews, favorites) с использованием `createAsyncThunk` и переданного в store `api`.
- **Хуки** (`src/hooks/useStore.ts`): типизированные `useAppSelector` и `useAppDispatch`.

Поток: действие пользователя → компонент вызывает `dispatch(action)` или `dispatch(asyncAction())` → store обновляет state через редьюсеры/extraReducers → компоненты с `useAppSelector` перерисовываются.

### Главная страница

**MainPage** (`src/pages/main-page/main-page.tsx`):

- Из store: `offers.offers`, `offers.isLoading`, `appReducer.currentCity`, `appReducer.sorting`.
- При смене города — `dispatch(changeCityAction(newCity))`.
- Офферы фильтруются по `currentCity.title`. При загрузке показывается **Spinner**, при отсутствии офферов по городу — **PlacesEmpty**, иначе — **OffersContainer**.

**OffersContainer** (`src/components/offers-container/offers-container.tsx`):

- Сортировка через `getSortedOffers(offers, sorting)` (utils), смена сортировки — `dispatch(changeSortingAction(sorting))`.
- Рендерит **PlacesFound**, **PlacesSorting**, список **PlaceCard**, **CitiesMap** (карта с маркерами и подсветкой выбранного оффера при наведении).

**PlacesSorting** и **SortingOption** — отображение и выбор варианта сортировки из store.

### Страница объявления

**OfferPage** (`src/pages/offer-page/offer-page.tsx`):

- `id` из URL (`useParams()`). Загрузка оффера и отзывов через `fetchOfferByIdAsyncAction`, `fetchNearbyOffersAsyncAction`, `fetchReviewsByIdAsyncAction`.
- Отображаются **OfferImages**, **OfferWrapper** (описание, кнопка избранного, отзывы), **OfferMap**, до 3 офферов «рядом» (**PlaceCard**). При наведении на карточку обновляется активный маркер на карте.

### Страница избранного

**FavoritesPage** (`src/pages/favorites-page/favorites-page.tsx`):

- Данные из store: `favoriteOffers.favoritesOffers`. При монтировании — `fetchFavoriteOffersAsyncAction()`.
- Если есть избранные — **FavoritesList** (сгруппировано по городам), иначе **FavoritesEmpty**.

### Сервисы и API

- **`src/services/api.ts`**: `createAPI()` — экземпляр Axios с baseURL бэкенда и таймаутом; в interceptor запроса подставляется токен из `getToken()` в заголовок `x-token`. Этот `api` передаётся в store как `extraArgument` для thunk.
- **`src/services/token.ts`**: работа с токеном в `localStorage` (ключ из констант): `getToken`, `saveToken`, `dropToken`.

Авторизация: проверка при старте (`checkAuthLoginAsyncAction`), вход (`loginAsyncAction`), выход (`logoutAsyncAction`). Статус хранится в `user` slice.

### Константы и типы

- **`src/const/cities.ts`**: массив городов (Cities) с полями для карты (title, lat, lng, zoom, selected).
- **`src/const/const.ts`**: AppRoute, APIRoute, AuthorizationStatus, настройки бэкенда, иконки Leaflet (defaultIcon, customIcon) и др.
- **`src/types/types.ts`**: интерфейсы IOffer, ICity, IReview, IUserData, типы TSortingType, IOfferId и др.
- **`src/types/types.props.ts`**: пропсы компонентов и страниц.

### Карты

- В **const/const.ts** подключается Leaflet, задаются `defaultIcon` и `customIcon` для маркеров.
- **CitiesMap** и **OfferMap** используют хук **useMap** для инициализации карты и отображения маркеров по офферам и выбранному офферу.

### Тестирование

- **Vitest** (vite.config.ts: test.globals, environment: jsdom, setupFiles: src/setupTests.ts).
- **setupTests.ts**: подключение matchers из `@testing-library/jest-dom/vitest`.
- Unit-тесты редьюсеров в **`src/store/slices/`**: `appSlice.test.ts`, `offerSlice.test.ts`, `userSlice.test.ts`, `reviewsSlice.test.ts`, `favoritesSlice.test.ts` — проверка начального состояния и обработки экшенов (в том числе pending/fulfilled/rejected для async thunk).

---

## Запуск и сборка

```bash
npm install   # установка зависимостей
npm start     # dev-сервер (Vite)
npm run build # сборка (tsc && vite build)
npm run preview # просмотр собранной версии
npm run lint  # проверка линтером (ESLint)
npm test      # тесты (Vitest)
```
<a href="https://htmlacademy.ru/intensive/react"><img align="left" width="50" height="50" title="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/react/logo-for-github.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[React. Разработка сложных клиентских приложений](https://htmlacademy.ru/intensive/react)» от [HTML Academy](https://htmlacademy.ru).
