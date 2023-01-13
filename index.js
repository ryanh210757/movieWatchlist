document.getElementById("searchBtn").addEventListener("click", function (){
    fetch("http://www.omdbapi.com/?t=blade&apikey=c9792923")
    .then(res => res.json())
    .then(data => console.log(data))    
})

