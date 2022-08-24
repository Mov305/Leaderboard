class Game {
    async getFetch(){
        const response = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2dDvUQpbp3EkrMYieGmZ/scores");
        const data = await response.json()
        console.log(data)

    }

}

const game = new Game

export default game