export async function getCoinDetail(coinId) {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?market_data=true`, {
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    const data = await response.json();
    console.log("main", data)
    return data;
}