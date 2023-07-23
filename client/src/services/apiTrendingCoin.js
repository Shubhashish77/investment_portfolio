export async function getTrendingCoinsApi() {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending', {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}