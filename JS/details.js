let response;
async function getGameDetails(getId){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '186176d5a6mshd3ac45cb505f16ap174cdcjsn9a8a9b1426de',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let Url = "https://free-to-play-games-database.p.rapidapi.com/api/games?id=";
    const data = await fetch(Url + getId , options);
    response = await data.json();
    new displayDetails(582);
}



export{getGameDetails};