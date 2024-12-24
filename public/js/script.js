
document.addEventListener("DOMContentLoaded", () => {
    const btnSearch = document.getElementById("btn-search");
    const txtSearch = document.getElementById("input-search");
    const txtResult = document.getElementById("txt-result");

    async function buscarVideos(query){
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        const data = await response.json();
        console.log(data);
        txtResult.innerText = data.results;
    }

    btnSearch.addEventListener("click", async () => {
        console.log("Realizando busqueda...");
        const query = txtSearch.value;
        await buscarVideos(query);
    });
});