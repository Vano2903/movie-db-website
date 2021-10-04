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
    return resp;
}

function generateButtons() {

}

function setPage() { }

async function generatePage(execAnyways) {
    let query = $("#query").val();
    let cardContainer = document.getElementById("card-container");
    console.log(lastSearched)
    if (lastSearched != query || execAnyways) { // 
        lastSearched = query
        let movies = await queryMovie(query, page);
        console.log(movies)
        movies.results.forEach(movie => {
            // console.log(movie)
        });
    }
}

document.getElementById("query").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        generatePage(false)
    }
});


document.getElementById("1").style.backgroundImage = "url('https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80')";

document.getElementById("1").style.backgroundImage = "url('https://images.unsplash.com/photo-1633340867842-a17f965a5113?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80')";



// document.getElementById("1").setProperty("background", "url('https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80')", "important");

