export interface IPizza {
    id: number;
    name: string;
    weight: number;
    description: string;
    price: number;
    image: string;
    count: number;
}

export interface ITest {
    items: IPizza[];
    count: number;
   // page: string;
}