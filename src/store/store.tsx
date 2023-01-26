import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pizzaApi } from "../services/pizzaService";
import basketReducer from './basket/BasketSlice'
const rootReducer = combineReducers({
  basketReducer,
  [pizzaApi.reducerPath]: pizzaApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pizzaApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type FetchBaseQueryMeta = { request: Request; response?: Response };
