let response;
async function getGame(cat){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '186176d5a6mshd3ac45cb505f16ap174cdcjsn9a8a9b1426de',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let Url = "https://free-to-play-games-database.p.rapidapi.com/api/games?category=";
    let data = await fetch(Url + cat , options);
    response = await data.json();
    new display(response);
    console.log(response);
}

class display{
    constructor(response){
        let Box = "";
        for (let i = 0; i < response.length; i++){
            Box += `
            <button class="col-lg-3 col-md-6 col-sm-12 bg-transparent border-0" onclick="new displayDetails(${i})">
                <div class="hoverBig">
                    <span class="Content d-flex flex-column align-items-center">
                        <img src="${response[i].thumbnail}" alt="game logo" class="bg-transparent mt-3 w-100 px-3 rounded-top-3">
                        
                        <figcaption class="p-3">
                            <span class="d-flex justify-content-between">
                                <h6 class="text-white ms-2">${response[i].title}</h6>
                                <h6 class="money text-white me-2 fw-bolder">Free</h6>
                            </span>
                            <h6 class="desc text-center">${response[i].short_description.split(" ", 5)}</h6>
                        </figcaption>
                    </span>
                    
                    <footer class="partOne position-relative d-flex justify-content-between px-2 align-items-center">
                        <span class="badge ms-2">${response[i].genre}</span>
                        <span class="badge me-2">${response[i].platform}</span>
                    </footer>
                </div>
            </button>`;
        }
        document.getElementById("gameBox").innerHTML = (Box);
    }
}

class displayDetails{
    constructor(index){
        $(document).ready(function(){
            $(".loadPage").fadeIn(0);
            $(".loadPage").fadeOut(1000);
            $("body").css("overflow", "visible");
        });

        let detailsBox = `
        <div class="Container mx-auto d-flex flex-column">
            <header class="d-flex justify-content-between align-items-center">
                <h1 class="fs-3 text-white">Details Game</h1>
                <i class="fa-solid fa-xmark" id="x-mark" onclick="close()"></i>
            </header>

            <footer class="partTwo d-flex">
                <span class="img">
                    <img src="${response[index].thumbnail}" alt="game logo">
                </span>
                <span class="details text-white">
                    <h2 class="my-3">Title: ${response[index].title}</h2>
                    <h6 class="my-3">Category: <span class="blue bg-info text-black rounded-2">${response[index].genre}</span></h6>
                    <h6 class="my-3">Platform: <span class="blue bg-info text-black rounded-2">${response[index].platform}</span></h6>
                    <h6 class="my-3">Status: <span class="blue bg-info text-black rounded-2">Live</span></h6>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ut, beatae, fuga obcaecati
                        dolorum corrupti ab suscipit soluta doloremque quia vel, culpa voluptatum asperiores facere
                        repudiandae itaque velit enim reiciendis ullam quos. Omnis illo voluptatem quis, repellendus
                        ratione nihil, iusto a doloremque eligendi inventore non nobis cupiditate commodi quae
                        provident, expedita possimus ducimus! Fuga est nostrum aliquam illo temporibus voluptas.
                    </p>
                    <a href="${response[index].game_url}"><button class="rounded-3 text-white">Show Game</button></a>
                </span>
            </footer>
        </div>`
            
        $(displayDetails).ready(function(){
            $(".loadPage").fadeOut(1000);
            $("body").css("overflow", "visible");
        });

        document.querySelector(".home").classList.replace("d-block", "d-none");
        document.querySelector(".details").classList.replace("d-none", "d-block");
        document.querySelector("#gameDetails").innerHTML = (detailsBox);
            
        let xmark = document.getElementById("x-mark");
        xmark.addEventListener("click", function(){
            document.querySelector(".details").classList.replace("d-block", "d-none");
            document.querySelector(".home").classList.replace("d-none", "d-block");
            $(document).ready(function(){
                $(".loadPage").fadeIn(0);
                $(".loadPage").fadeOut(1000);
                $("body").css("overflow", "visible");
            });
        });
    }
}

export{getGame}