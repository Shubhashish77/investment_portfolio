/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query"
import { getMarketChart } from "../../services/apiMarketChart";

export function useMarketChart(coinId) {

    const { isLoading, data: marketChart } = useQuery({ queryKey: ['marketChart', coinId], queryFn: () => getMarketChart(coinId) });
    return {
        isLoading, marketChart
    }
}