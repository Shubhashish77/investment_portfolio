/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query"
import { getTrendingCoinsApi } from "../../services/apiTrendingCoin"

export function useTrendingCoins() {
    const { isLoading, data: trendingCoins } = useQuery({ queryKey: ['trendingCoins'], queryFn: getTrendingCoinsApi });

    return {
        isLoading, trendingCoins
    }
}