
function openModal(id, isPopular) {
    lastIdPressed = id;
    let movies;
    if (isPopular) {
        movies = sessionStorage.getItem("populars");
        movies = JSON.parse(movies)
    } else {
        movies = sessionStorage.getItem("searched");
        movies = JSON.parse(movies)
    }
    console.log(movies)

    movies.results.forEach(movie => {
        if (movie.id == id) {
            // $('#movie-modal-image').src("https://image.tmdb.org/t/p/w500" + movie.backdrop_path);
            $('#movie-modal-image').attr("src", "https://image.tmdb.org/t/p/w500" + movie.backdrop_path);
            $('#movie-modal-title').text(movie.original_title);
            $('#movie-modal-body-text').text(movie.overview);

            $('#movie-modal').modal('show')
            return
        }
    });
}