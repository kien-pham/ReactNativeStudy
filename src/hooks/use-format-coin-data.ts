import { ChartDataType, ResponseCoin } from "src/types/coin";

export const useFormatCoinDataFromApi = (coinData: ResponseCoin[]) => {
  if (!coinData || coinData.length === 0) {
    return null;
  }

  return coinData.map((coin) => {
    const chartValues = coin.sparkline_in_7d.price.map((value) => {
      const [price, time] = String(value).split(".");
      return {
        value: parseInt(price, 10),
        timestamp: time ? parseInt(time, 10) : 0,
      };
    });

    return {
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image,
      currentPrice: coin.current_price,
      marketRank: coin.market_cap_rank,
      priceChangePercentage24h: parseFloat(
        coin.price_change_percentage_24h.toFixed(2)
      ),
      isUp: coin.price_change_percentage_24h > 0,
      chartValue: chartValues,
    };
  }) as ChartDataType[];
};
