import { useEffect, useState } from "react";

const GameStats = ({ gameData }) => {
    const [gameStats, setGameStats] = useState({});
    //https://statsapi.web.nhl.com/api/v1/game/2021021271/boxscore
    useEffect(() => {
        const getGameStats = async () => {
            return fetch(`https://statsapi.web.nhl.com/api/v1/game/${gameData.gameID}/boxscore`)
            .then((response) => response.json())
            .then(({ teams }) => { setGameStats(teams) })
        }
        getGameStats()
    }, [])


    return(
        <div className="gameStats">
            <div id="gameStats--shots"></div>
            <div id="gameStats--powerplays"></div>
            <div id="gameStats--faceoff"></div>
            <div id="gameStats--hits"></div>
        </div>
    )
}

export default GameStats;