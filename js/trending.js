async function getPopoulars() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1`, requestOptions)
    let resp = await res.json();
    console.log(resp)
    return resp;
}

async function setPopulars() {
    let populars = sessionStorage.getItem("populars");
    if (populars === null) {
        populars = await getPopoulars()
        sessionStorage.setItem("populars", JSON.stringify(populars))
    } else
        populars = JSON.parse(populars)

    let cardContainer = document.getElementById("trending-container");
    cardContainer.innerHTML = "";
    populars.results.forEach(movie => {
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrap");
        wrapper.classList.add("modal-activator-popular")
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

    updateCards();
}