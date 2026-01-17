const searchtBtn = document.getElementById("search-btn");
const container = document.getElementById("container");

const savedmovies = [];

searchtBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.querySelector("input[type='search']").value;


fetch(`https://www.omdbapi.com/?apikey=f103c4b2&s=${searchInput}`)
  .then(res => res.json())
  .then(data => {

    container.innerHTML = "";

    data.Search.forEach(movie => {
      fetch(`https://www.omdbapi.com/?apikey=f103c4b2&i=${movie.imdbID}`)
        .then(res => res.json())
        .then(details => {

          container.innerHTML += `
            <div class="movie">
              <div class="poster">
                <img src="${details.Poster}" alt="${details.Title}">
              </div>
              <div class="text">
                <div class="title">
                    <p> ${details.Year} </p>
                  <h3>${details.Title}</h3>
                  <p>${details.imdbRating}</p>
                </div>
                <div class="info">
                  <p>${details.Runtime}</p>
                  <p>${details.Genre}</p>
                </div>
                <p>${details.Plot}</p>
                <button class="add-btn" data-imdbid="${details.imdbID}"> + WatchList </button>
              </div>
            </div>
          `;
        });
    });
  });
});

container.addEventListener("click", (e)=> {
  if(e.target.classList.contains("add-btn")) {
    const imdbId = e.target.getAttribute("data-imdbid")
    if(!savedmovies.includes(imdbId)) {
      savedmovies.push(imdbId)
    }
    console.log(savedmovies)
    e.target.textContent = "Salvato!"
  }
})