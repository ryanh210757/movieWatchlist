let movieTitle
let title

document.getElementById("searchBtn").addEventListener("click", function (){
    movieTitle = document.getElementById("movieTitle").value
    fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=c9792923`)
    .then(res => res.json())
    .then(data => {
        console.log(movieTitle +"s")
        console.log(data)

        let html = ""
        for(let item of data.Search){
            fetch(`http://www.omdbapi.com/?i=${item.imdbID}&plot=short&apikey=c9792923`)
                .then(res=> res.json())
                .then(data => {
                    console.log(data)
                    html += 
                    `
                    <div class="movieLayout">
                        <img src="${data.Poster}"/>
                        <div class="movieContainer">
                        <h2>${data.Title}</h2>
                        <p>${data.imdbRating}</p>
                        <div class="movieStats">
                            <p>${data.Runtime}</p>
                            <p>${data.Genre}</p>
                            <button>Watchlist</button
                        </div>
                        <p>${data.Plot}</p>
                    </div>
                    </div>
                    `
                    document.getElementById("movieList").innerHTML =  html        
                })
            
        }
        console.log(html)
    })    
})
