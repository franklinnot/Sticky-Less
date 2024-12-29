
document.addEventListener("DOMContentLoaded", () => {
    const btnSearch = document.getElementById("btn-search");
    const txtSearch = document.getElementById("input-search");
    const txtResult = document.getElementById("txt-result");

    async function buscarVideos(query){
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        console.log(`Datos recibidos: ${JSON.stringify(data)}`);
        txtResult.innerText = data.results;
    }

    btnSearch.addEventListener("click", async () => {
        const query = txtSearch.value;
        await buscarVideos(query);
    });
});