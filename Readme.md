# Личный проект «Шесть городов»

* Студент: [Дмитрий Гилёв](https://up.htmlacademy.ru/react-individual/3/user/44605).
* Наставник: `Станислав Михайлов`.

---

## О проекте

«Шесть городов» — клиентское веб-приложение для поиска и просмотра объявлений по аренде жилья в шести городах Европы (Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf). Пользователь может выбирать город, сортировать предложения, просматривать карточки и страницу объявления, добавлять избранное (при авторизации) и входить в личный кабинет.

---

## Стек технологий

| Категория | Технология |
|-----------|------------|
| **Язык** | TypeScript |
| **Фреймворк** | React 18 |
| **Сборка** | Vite 4 |
| **Маршрутизация** | React Router DOM 6 |
| **Состояние** | Redux Toolkit, React-Redux |
| **HTTP-клиент** | Axios |
| **Карты** | Leaflet |
| **Мета-теги / SEO** | react-helmet-async |
| **Утилиты** | classnames, history, http-status-codes |
| **Тестирование** | Vitest, Testing Library, axios-mock-adapter, jsdom |

---

## Структура приложения и поток данных

### Точка входа

**`src/index.tsx`** — корень приложения:

- Создаёт React-корень и рендерит `<App />` внутри `<Provider store={store}>`.
- В `App` передаются пропсы: `offers` (мок из `mock/offers`), `cities` (из `const/cities`), `reviews` (из `mock/reviews`), `isAuth` (из `const/const`).
- Состояние хранится в Redux; доступ к нему — через `useAppSelector` / `useAppDispatch` из `hooks/useStore.ts`.

### Маршрутизация

**`src/app/app.tsx`** — определяет маршруты:

- Оборачивает приложение в `HelmetProvider` и `BrowserRouter`.
- `ScrollToTop` — при смене `pathname` прокручивает страницу вверх.
- Все основные страницы рендерятся внутри **`Layout`** (общий шапка и опционально футер).

| Путь | Компонент | Описание |
|------|-----------|----------|
| `/` | `MainPage` | Главная: список городов, карта, карточки предложений, сортировка |
| `/offer/:id` | `OfferPage` | Страница объявления: галерея, описание, карта, отзывы, «рядом» |
| `/login` | `LoginPage` | Страница входа (доступна только неавторизованным — `PrivateRoute` с `login`) |
| `/favorites` | `FavoritesPage` | Избранное (доступно только авторизованным — `PrivateRoute`) |
| `*` | `ErrorPage` | 404 |

**`Layout`** (`src/components/layout/layout.tsx`):

- Рисует шапку с логотипом и навигацией (Sign in / профиль и избранное / Sign out в зависимости от `isAuth()`).
- Рендерит дочерний маршрут через `<Outlet />`.
- Футер показывается только на странице избранного (логика в `layout/utils.ts` — `getLayoutState(pathname)`).

**`PrivateRoute`** (`src/components/private-route/private-route.tsx`):

- Для `/login`: если `isAuth === true` — редирект на `/`, иначе показывается форма входа.
- Для `/favorites`: если `isAuth === true` — показывается страница избранного, иначе редирект на `/login`.

### Управление состоянием (Redux)

- **Store** (`src/store/store.ts`): создаётся через `configureStore`, в него передаётся один общий `reducer`; в middleware передаётся `api` (экземпляр Axios из `services/api`) как `extraArgument` для будущих thunk.
- **Типы** (`src/store/types.ts`): `State` — тип состояния из `store.getState()`, `AppDispatch` — тип `store.dispatch`.
- **Действия** (`src/store/action.ts`):
  - `changeCityAction(city)` — смена выбранного города.
  - `fillingOffersAction(offers)` — подстановка списка предложений.
  - `changeSortingAction(sorting)` — смена типа сортировки.
- **Редюсер** (`src/store/reducer.ts`): начальное состояние — город `Cities[0]`, офферы из `mock/offers`, сортировка `'Popular'`. Обрабатывает три действия выше и обновляет `state.city`, `state.offers`, `state.sorting` (через Immer).
- **Хуки** (`src/hooks/useStore.ts`): типизированные `useAppSelector` и `useAppDispatch` для доступа к store в компонентах.

Поток: пользовательское действие → компонент вызывает `dispatch(action)` → store передаёт action в редюсер → редюсер обновляет state → компоненты с `useAppSelector` перерисовываются.

### Главная страница

**`MainPage`** (`src/pages/main-page/main-page.tsx`):

- Читает из store: `activeCity`, `offers`.
- При смене города вызывает `dispatch(changeCityAction(newCity))`.
- Рендерит:
  - **CityNavigation** — список из шести городов; клик по городу вызывает `onChangeCity` → `changeCityAction`.
  - Если есть офферы — **OffersContainer**, иначе **PlacesEmpty**.

**OffersContainer** (`src/components/offers-container/offers-container.tsx`):

- Фильтрует офферы по `activeCity.title`.
- Читает из store `sorting`, сортирует список (`getSortedOffers`: Popular, Price low/high, Top rated).
- При наведении на карточку сохраняет выбранный оффер в локальный state и передаёт его в карту.
- Рендерит: **PlacesFound** (количество), **PlacesSorting**, список **PlaceCard**, **CitiesMap** (карта с маркерами и подсветкой выбранного оффера).
- Смена сортировки: `dispatch(changeSortingAction(sorting))`.

**PlacesSorting** + **SortingOption**:

- Отображают текущий вариант сортировки из store; по клику открывается выпадающий список вариантов, выбор варианта вызывает `handleChangeSorting` → `changeSortingAction`.

### Страница объявления

**OfferPage** (`src/pages/offer-page/offer-page.tsx`):

- Берёт `id` из URL (`useParams()`), по нему находит оффер и город среди `offers` и `cities`.
- Показывает текущее объявление (**OfferImages**, **OfferWrapper** с описанием и отзывами), **OfferMap** с маркерами (текущее + «рядом»).
- Блок «Other places in the neighbourhood» — до 3 случайных офферов из того же города; при наведении на карточку обновляется подсветка на карте (`selectedOffer` в локальном state).

### Страница избранного

**FavoritesPage** (`src/pages/favorites-page/favorites-page.tsx`):

- Фильтрует `offers` по `offer.isFavorite`.
- Если есть избранные — **FavoritesList** (сгруппированные по городам), иначе **FavoritesEmpty**.

### Сервисы и API

- **`src/services/api.ts`**: `createAPI()` создаёт экземпляр Axios с `baseURL` бэкенда и таймаутом; в interceptor запроса подставляется токен из `getToken()` в заголовок `x-token`. Этот `api` передаётся в store как `extraArgument` для thunk.
- **`src/services/token.ts`**: работа с токеном в `localStorage` (`six-cities-token`): `getToken`, `saveToken`, `dropToken`.

Авторизация в UI пока опирается на константу в **`src/const/const.ts`** (`isAuth()`), а не на реальный запрос через `api`.

### Константы и типы

- **`src/const/cities.ts`**: массив из шести городов с координатами и zoom для карты.
- **`src/const/const.ts`**: `AppRoute`, `AuthorizationStatus`, `isAuth()`, URL маркеров Leaflet и настройки иконок для карты.
- **`src/types/types.ts`**: интерфейсы `IOffer`, `ICity`, `IReview`, тип `SortingType`.
- **`src/types/types.props.ts`**: пропсы компонентов и страниц.

### Карты

- В **const/const.ts** подключается Leaflet и задаются `defaultIcon` и `customIcon` для маркеров.
- **CitiesMap** и **OfferMap** используют хук **useMap** для инициализации карты Leaflet и отображения маркеров по офферам и выбранному офферу.

---

## Запуск и сборка

```bash
npm install   # установка зависимостей
npm start     # dev-сервер (Vite)
npm run build # сборка (tsc + vite build)
npm run preview # просмотр собранной версии
npm run lint  # проверка линтером
npm test      # тесты (Vitest)
```

---

_Не удаляйте и не изменяйте папки и файлы:_  
_`.editorconfig`, `.gitattributes`, `.gitignore`._

---

<a href="https://htmlacademy.ru/intensive/react"><img align="left" width="50" height="50" title="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/react/logo-for-github.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[React. Разработка сложных клиентских приложений](https://htmlacademy.ru/intensive/react)» от [HTML Academy](https://htmlacademy.ru).
