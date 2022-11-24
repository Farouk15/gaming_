var maincards = document.getElementById("maincards");
var view = document.getElementById("view");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '424f240769mshd66e91d4a2f0fe3p199b67jsn370b986a5f6f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

 
fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options).then((data)=>{return data.json()}).then((data)=>{
	console.log(data)

  
    localStorage.setItem("id", data.id);
data.forEach(item=>{
    maincards.innerHTML +=`
    <figure class="article" >
                
    <img src="${item.thumbnail}" />

    <figcaption>
    <p class="dota box">${item.title}</p>

        <p class = "forcenter">
        <p id="for_disc">${item.short_description}</p>

        <a href="single.html" target="blank">
        <button id = "view" onclick= "get_id(${item.id})" class="btn btn-dark forbtn" >View More</button> 
        </a>  
        <a target="blank" href="${item.freetogame_profile_url}"> <button class="btn btn-dark forbtn">Download</button></a>  

        </p>

    </figcaption>

</figure>

    `
}
)

});
   function get_id(id){
        console.log(id);
        localStorage.setItem("id", id);
    };

