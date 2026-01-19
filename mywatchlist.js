const mymovies = JSON.parse(localStorage.getItem("watchlist"))

myWatchList(mymovies)

function myWatchList (ids) {
  ids.forEach(id =>{
    fetch(`https://www.omdbapi.com/?apikey=f103c4b2&i=${id}`)
        .then(res => res.json())
        .then(details => {
                    watchlist.innerHTML += `
            <div class="movie">
              <div class="poster">
                <img src="${details.Poster}" alt="${details.Title}">
              </div>
              <div class="text">
                <div class="title">
                    <p> ${details.Year} </p>
                  <h3>${details.Title}</h3>
                  <p>${details.imdbRating}☆</p>
                </div>
                <div class="info">
                  <p>${details.Runtime}</p>
                  <p>${details.Genre}</p>
                </div>
                <p>${details.Plot}</p>
              </div>
            </div>
          `;
    })
  })
}