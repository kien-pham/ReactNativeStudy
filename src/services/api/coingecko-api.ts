import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseCoin } from "src/types/coin";

// Define a service using a base URL and expected endpoints
export const coinMarketApi = createApi({
  reducerPath: "coinMarketApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
  endpoints: (builder) => ({
    getCoinsPrice: builder.query<ResponseCoin[], void>({
      query: () =>
        "coins/markets?vs_currency=usd&sparkline=true&price_change_percentage=7d",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsPriceQuery } = coinMarketApi;
