let id = localStorage.getItem("id");
var wrap2 = document.getElementById("wrap2");
var wrap3 = document.getElementById("wrap3");
var wrap4 = document.getElementById("wrap4");

console.log(`
⣿⣿⣿⣿⣿⣿⠏⠌⣾⣿⣿
⣿⣿⣿⣿⣿⠀⠀⠸⠿⣿⣿⣿
⣿⣿⣿⣿⠃⠀⣠⣾⣿⣿⣿
⣿⣿⡿⠃⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠃⠀⠀⣾⣿⣿⣿⣿⣿⣦⠀⠈⠻⣿⣿⣿
⣿⣿⠀⠀⠀⣿⣿⣿⠟⠉⠉⠉⢃⣤⠀⠈⢿⣿⣿⣿
⣿⣿⠀⠀⠀⢸⣿⡟⠀⠀⠀⠀⢹⣿⣧⠀⠀⠙⣿⣿
⣿⣿⡆⠀⠀⠈⠻⡅⠀⠀⠀⠀⣸⣿⠿⠇⠀⠀⢸⣿
⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠔⠛⠁⠀⠀⠀⣠⣿⣿
⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿
⣿⣿⣿⠀⠀we go jim !⠀⠀⣠⣾⣿⣿
⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀ ⣠⣿
⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢰⣿
⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿
⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿
⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠
`);
console.log(id);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '424f240769mshd66e91d4a2f0fe3p199b67jsn370b986a5f6f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id='+ id, options).then(data => data.json()).then(data => {
        console.log(data)
    wrap2.innerHTML =`
		<h1 class="for_style3 for_style">${data.title}</h1>
		<div class="row">
        <div class="col-md-5">
             	<div>
             	<img class="for-img" src="${data.thumbnail}" >                              
             	  <br>
             	  <a class="for-style-b" target="blanc" href="${data.game_url}"> <button style="margin: 20px;" class="btn btn-dark ">Download</button></a>  
             	</div>        
          </div>
          <div class="col-md-7">
            
                 	<div>
                 		<h3 class="for_style"><p class="for-b2">description:</p> <span class="for-span">${data.description}</span> </h3>
                 	</div>
            
            
          </div>
            <div class="more-div col-md-4">
                <p class="for-more">  Information</p>
                <div>
                <h3 class="for_style4">status:  &nbsp; ${data.status}</h3>
                <br>
                <p class="for_style4"></p>
                </div> 
        
                <div>
                <h3 class="for_style4"> Release Date:&nbsp; ${data.release_date}</h3>
                <br>
                <p></p>
                </div>    
        
                <div>
                <h3 class="for_style4"> type:&nbsp; ${data.genre}</h3>
                <br>
                <p></p>
                </div>   
        
                <div>
                <h3 class="for_style4"> publisher:&nbsp; ${data.publisher}</h3>
                <br>
                <p></p>
                </div>  
        
                <div>
                <h3 class="for_style4"> developer:&nbsp; ${data.developer}</h3>
                <br>
                <p></p>
                </div>  
                <div>
                    <h3 class="for_style4"> platform:&nbsp; ${data.platform}</h3>
                    <br>
                    </div>
            </div>
			<div class="col-md-8">
            <p class="scs-style">Screenshots</p>
            <div class="container">
            <div class="row">
            <div class="scs-imgs">
            <div class="col-md-4 col-12">

            <img class="imgs-st" src="${data.screenshots[0].image}" >

            </div>
            <div class=" col-md-4 col-12">
            <img class="imgs-st" src="${data.screenshots[1].image}" >

            </div>
            <div class=" col-md-4 col-12">
            <img class="imgs-st" src="${data.screenshots[2].image}" >

            </div>
            </div>
            </div> 
            </div>


        </div>
			<div class = "col-md-12 ">
            <p  class="scs-style">minimum system requirements  <p>
            <div class="for-space">
                <div class="first col-md-4 ">
                    <div>
						<p class="for_style5">Grafics</p>
                        <p style="margin-bottom:100px;" class="for_style2">${data.minimum_system_requirements.graphics}</p>
                        <br>			
                </div>
                <div>
				<p class="for_style5">Memory</p>
                <p class="for_style2">${data.minimum_system_requirements.memory}</p>
            
                </div>
                </div>

                <div class="second">
            <div>
				<p class="for_style5">operating system</p>
                <p style="margin-bottom:100px;" class="for_style2">${data.minimum_system_requirements.os}</p>
				<p class="for_style5">processor</p>
                <p class="for_style2">${data.minimum_system_requirements.processor}</p>
                    </div>
                
                <div>
				<p style="margin-top:100px;" class="for_style5">storage</p>
                <p class="for_style2">${data.minimum_system_requirements.storage}</p>	
                </div>
                </div>
            </div>
        </div>

		
                                
     
                
                
        </div>


    `
}
)

