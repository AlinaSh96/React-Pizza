import { IPizza } from "../models/IPizza";

export const CalcTotalCount = (items: IPizza[]) => {
return items.reduce((acc: number, amount: any) => acc + amount.count, 0);
} 

export const CalcTotalPrice = (items: IPizza[]) => {
    return items.reduce((acc: number, amount: any) => acc + (amount.count * amount.price), 0);
    } 