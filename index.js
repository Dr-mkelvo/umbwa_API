const Img = document.getElementById("img")
fetch("https://dog.ceo/api/breeds/image/random")
    .then(Response => Response.json())
    .then(data =>
    
      Img.innerHTML = `<img src="${data.message}" width= "200px">`
     )
    


