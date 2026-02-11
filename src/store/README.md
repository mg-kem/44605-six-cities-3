# Redux в проекте — как это работает

Кратко и по шагам: что такое Redux, зачем он нужен и как устроен.

---

## Зачем нужен Redux

Состояние приложения (выбранный город, список офферов и т.д.) нужно хранить в одном месте и обновлять по правилам. Redux — это **хранилище состояния** и **способ его менять**: все изменения идут через **действия (actions)** и **редюсер (reducer)**. Так проще отлаживать и понимать, откуда взялись данные.

---

## Главная идея: однонаправленный поток данных

```
Пользователь что-то сделал
        ↓
Компонент вызывает dispatch(action)
        ↓
Store передаёт action в редюсер
        ↓
Редюсер по типу action обновляет state
        ↓
Store сохраняет новое состояние
        ↓
Компоненты, подписанные на state, перерисовываются
```

Никто не меняет state напрямую — только через **action** и **редюсер**.

---

## Файлы в папке store

### 1. `action.ts` — что можно «сделать» с состоянием

Здесь объявляются **действия (actions)**. Каждое действие — это объект с полем `type` и опциональным `payload` (данные для обновления).

- `createAction('changeCity', (city) => ({ payload: city }))` — действие «сменить город».
- `createAction('fillingOffers', (offers) => ({ payload: offers }))` — действие «заполнить список офферов».

В коде ты **не вызываешь редюсер**. Ты вызываешь **creator действия** и передаёшь результат в **dispatch**:

```ts
dispatch(changeCityAction(city));   // отправить в store действие «сменить город»
dispatch(fillingOffersAction(offers)); // отправить действие «заполнить офферы»
```

---

### 2. `reducer.ts` — как состояние меняется в ответ на действие

**Редюсер** — это функция, которая по **текущему state** и **action** возвращает **новое state**. Её вызывает сам store, когда приходит action через `dispatch`. В компонентах редюсер не вызывают.

В проекте используется `createReducer` из Redux Toolkit:

- Задаётся **начальное состояние** (`initialState`).
- Для каждого типа действия через `addCase` описывается: «если пришло такое действие — обнови state так».

Пример:

```ts
.addCase(changeCityAction, (state, action) => {
  state.city = action.payload.title;
})
```

Здесь: «если пришло действие `changeCityAction`, положи в state новый город из `action.payload`». Благодаря Immer (встроен в Redux Toolkit) можно писать `state.city = ...` вместо копирования всего объекта.

Итого: **dispatch вызываешь ты, редюсер вызывается внутри store.**

---

### 3. `store.ts` — само хранилище (store)

`configureStore` создаёт **store** — объект с методами:

- `**getState()**` — вернуть текущее состояние.
- `**dispatch(action)**` — отправить действие; store вызовет редюсер и обновит state.

В store передаётся наш редюсер из `reducer.ts`. Один store на всё приложение, он подключается в корне (например, в `index.tsx` через `Provider`).

---

### 4. `types.ts` — типы для TypeScript

Отсюда экспортируются типы:

- `**TState**` — тип всего состояния (что лежит в store).
- `**TAppDispatch**` — тип функции `dispatch` нашего store.

Они нужны, чтобы в компонентах `useSelector` и `useDispatch` знали типы и не было ошибок.

---

## Как использовать в компонентах

Store подключается в корне приложения через `<Provider store={store}>`. Внутри дерева компонентов используй хуки из `hooks/useStore.ts`:

### Прочитать состояние (useAppSelector)

```tsx
import { useAppSelector } from '../hooks/useStore';

const city = useAppSelector((state) => state.city);
const offers = useAppSelector((state) => state.offers);
```

Компонент подписывается на часть state; при её изменении компонент перерисуется.

### Отправить действие (useAppDispatch)

```tsx
import { useAppDispatch } from '../hooks/useStore';
import { changeCityAction } from '../store/action';

const dispatch = useAppDispatch();

// по клику — отправить действие «сменить город»
const handleCityClick = (newCity: ICity) => {
  dispatch(changeCityAction(newCity));
};
```

Ты вызываешь только **dispatch(action)**. Кто именно обновит state (редюсер для `changeCityAction`) — решает store по типу action.

---

## Краткая шпаргалка


| Кто / что          | Роль                                                                   |
| ------------------ | ---------------------------------------------------------------------- |
| **Action**         | Объект «что сделать» (type + payload). Создаётся через `createAction`. |
| **dispatch**       | Метод store: `dispatch(action)`. Отправляет action в store.            |
| **Reducer**        | Функция (state, action) → new state. Вызывается store, не компонентом. |
| **Store**          | Хранит state и вызывает редюсер при каждом dispatch.                   |
| **useAppSelector** | Достать часть state в компоненте.                                      |
| **useAppDispatch** | Получить dispatch в компоненте, чтобы отправлять actions.              |


---

## Пример полного цикла: смена города

1. Пользователь кликает по городу в списке.
2. Обработчик в компоненте вызывает `dispatch(changeCityAction(selectedCity))`.
3. Store получает action с типом `'changeCity'` и payload с городом.
4. Store вызывает редюсер, редюсер в `addCase(changeCityAction, ...)` обновляет `state.city`.
5. Store сохраняет новое состояние.
6. Компоненты, где есть `useAppSelector((state) => state.city)`, получают новое значение и перерисовываются.

