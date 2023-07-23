/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query"
import { getCoinDetail } from "../../services/apiCoinDetail"

export function useCoinDetail(coinId) {

    const { isLoading, data: coinDetail } = useQuery({ queryKey: ['coinDetail', coinId], queryFn: () => getCoinDetail(coinId) });
    console.log("2 ", coinDetail)
    return {
        isLoading, coinDetail
    }
}