let movieTitle

document.getElementById("searchBtn").addEventListener("click", function (){
    movieTitle = document.getElementById("movieTitle").value
    fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=c9792923`)
    .then(res => res.json())
    .then(data => {
        console.log(movieTitle +"s")
        console.log(data)
        let html = ""
        for(let item of data.Search){
            html += 
            `
            <img src=${item.Poster} />
            <h1>${item.Title}</h1>
            <h3>${item.Year}</h3> 
            `
        }
        document.getElementById("movieList").innerHTML =  html
        console.log(html)
    })    
})
