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

async function queryMovie(query, page) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie/?query=${query}&page=${page}`, requestOptions)
    let resp = await res.json();
}

function generateButtons() {

}

function setPage() { }

async function generatePage(execAnyways) {
    let query = $("#query").val();
    let cardContainer = document.getElementById("card-container");
    if (lastSearched != query || execAnyways) {
        let movies = await queryMovie(query, page);
        movies.results.forEach(movie => {

        });
    }
}
