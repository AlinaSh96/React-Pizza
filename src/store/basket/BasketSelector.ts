import { RootState } from '../store';

export const selectBasketItems = () => (state: RootState) =>
state.basketReducer.items;

export const selectTotalPrice = () => (state: RootState) =>
state.basketReducer.totalPrice;

export const selectCartItemById = (id: number) => (state: RootState) =>
state.basketReducer.items.find((obj) => obj.id === id);



