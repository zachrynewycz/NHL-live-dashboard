import { useEffect, useState } from "react";

const GameStats = ({ gameData }) => {
    const [gameStats, setGameStats] = useState({});
    const [maxValues, setMaxValues] = useState({});
    // return fetch("https://statsapi.web.nhl.com/api/v1/game/2017020659/boxscore")
    
    useEffect(() => {
        const getGameStats = async () => {
            return fetch(`https://statsapi.web.nhl.com/api/v1/game/${gameData.gameID}/boxscore`)
            .then((response) => response.json())
            .then(({ teams }) => {
                setGameStats({
                    homeShots: teams.home.teamStats.teamSkaterStats.shots,
                    awayShots: teams.away.teamStats.teamSkaterStats.shots,
                    homeBlocked: teams.home.teamStats.teamSkaterStats.blocked,
                    awayBlocked: teams.away.teamStats.teamSkaterStats.blocked,
                    homeFaceOff: teams.home.teamStats.teamSkaterStats.faceOffWinPercentage,
                    awayFaceOff: teams.away.teamStats.teamSkaterStats.faceOffWinPercentage,
                    homeHits: teams.home.teamStats.teamSkaterStats.hits,
                    awayHits: teams.away.teamStats.teamSkaterStats.hits
                })
            })
        }
        getGameStats()
        setProgressMax(gameStats)
    }, [gameData])

    const setProgressMax = (gameStats) => {
        //Get max values to be used with stat progress bars
        setMaxValues({
            shots: Math.max(gameStats.homeShots, gameStats.awayShots) + 15 || 0,
            blocks: Math.max(gameStats.homeBlocked, gameStats.awayBlocked) + 15 || 0,
            faceoff: Math.max(gameStats.homeFaceOff, gameStats.awayFaceOff) + 25 || 0,
            hits: Math.max(gameStats.homeHits, gameStats.awayHits) + 10 || 0
        })
    }   

    return(
        <div className="gameStats">
            <div id="gameStats-shots">
                <p>{gameStats.awayShots} Shots {gameStats.homeShots}</p>
                <progress max={maxValues.shots} className="reversed-progress" value={gameStats.awayShots}/>
                <progress max={maxValues.shots} value={gameStats.homeShots}/>
            </div>

            <div id="gameStats-blocks">
                <p>{gameStats.awayBlocked} Blocks {gameStats.homeBlocked}</p>
                <progress max={maxValues.blocks} className="reversed-progress" value={gameStats.awayBlocked}/>
                <progress max={maxValues.blocks} value={gameStats.homeBlocked}/>
            </div>

            <div id="gameStats-faceoff">
                <p>{gameStats.awayFaceOff} Face-Off% {gameStats.homeFaceOff}</p>
                <progress max={maxValues.faceoff} className="reversed-progress" value={gameStats.awayFaceOff}/>
                <progress max={maxValues.faceoff} value={gameStats.homeFaceOff}/>
            </div>

            <div id="gameStats-hits">
                <p>{gameStats.awayHits} Hits {gameStats.homeHits}</p>
                <progress max={maxValues.hits} className="reversed-progress" value={gameStats.awayHits}/>
                <progress max={maxValues.hits} value={gameStats.homeHits}/>
            </div>
        </div>
    )
}

export default GameStats;