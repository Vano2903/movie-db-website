var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json;charset=utf-8");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ZlZjBmMjA2YzM1OThlYWIzMTViYWM5ZjkxY2U4ZCIsInN1YiI6IjYxNDA0MTU5ZWZjYTAwMDA4ODAwN2YxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T0v4WH8sF5iufS7cvZpYmhZuMtd5B9J18EMPO63Hr_o");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

let page = 1;
let lastSearched = "";
let lastIdPressed = "";

async function queryMovie(query, page) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie/?query=${query}&page=${page}`, requestOptions)
    let resp = await res.json();
    return resp;
}

function generateButtons() {

}

function setPage() { }

async function generatePage(execAnyways) {
    let query = $("#query").val();
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    console.log(lastSearched)

    if (lastSearched != query || execAnyways) {
        lastSearched = query

        let movies = await queryMovie(query, page);
        sessionStorage.setItem("searched", JSON.stringify(movies))

        movies.results.forEach(movie => {
            let wrapper = document.createElement("div");
            wrapper.classList.add("wrap");
            wrapper.classList.add("modal-activator-movie")
            wrapper.setAttribute("id", movie.id)

            let container = document.createElement("div");
            container.classList.add("container");
            container.style.backgroundImage = "url('https://image.tmdb.org/t/p/w500" + movie.poster_path + "')";

            let p = document.createElement("p")
            p.innerHTML = movie.original_title;

            container.appendChild(p)
            wrapper.appendChild(container)
            cardContainer.appendChild(wrapper)
        });
    }
    updateCards()
}


document.getElementById("query").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        generatePage(false)
    }
});