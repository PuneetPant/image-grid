
async function fetchData() {
    const getData = await fetch("https://api.unsplash.com/search/photos?query=messi&per_page=30", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "authorization": "Client-ID 65451c02110a548f53242fb803b512b47b097ea26c557bfa0f2e45988cc6a3cd",
            "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site"
        },
        "referrer": "http://localhost:3000/",
        "body": null,
        "method": "GET",
    }).then((response) => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });

    return getData;

}
let ans = fetchData();
ans.then(res => {
    populateBoxes(res.results);
    setInLocalStorage('contentData', res.results)
})