// This is where the work happens lol:

document.querySelector("#searchBtn")
    .addEventListener("click", () => router.go("Loading"));

router.onShow.Loading = () => {
    /*
        Fetch data, load cookies, etc. here
    */
    
    // Timeout only for testing, remove later:
    setTimeout(() => router.go("Results"), 1000);
}