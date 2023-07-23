/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query"
import { getCoins } from "../../services/apiCoins"


export function useCoins(page) {
    console.log(page, "first")
    const { isLoading, data: coins } = useQuery(['coins', page], () => getCoins(page));

    return {
        isLoading, coins
    }
}