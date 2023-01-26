import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {ITest} from "../models/IPizza";
export const pizzaApi = createApi({
  reducerPath: "createApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6372a2c5025414c637148ed3.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    getAllPizza: builder.query<ITest, { limit: number; page: number }>({
      query: (arg) => {
        const { limit = 9, page = 1 } = arg;
        return {
          url: `/pizza`,
          params: {
            limit: limit,
            page: page
          },
        };
      },
    }),
  }),
});

export const { useGetAllPizzaQuery } = pizzaApi;
