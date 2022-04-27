import { useEffect, useState } from "react";

const GameStats = ({ gameData }) => {
    const [gameStats, setGameStats] = useState({});
    //Max values used for determining the max the progress bars should display based on game stats
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
            .catch((err) => {
                console.log(err)
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
        <div className="gamestats">
            <div id="gameStats__shots">
                <p>{gameStats.awayShots} Shots {gameStats.homeShots}</p>
                <progress max={maxValues.shots} className="gamestats__shots--reversed" value={gameStats.awayShots}/>
                <progress max={maxValues.shots} value={gameStats.homeShots}/>
            </div>

            <div id="gamestats__blocks">
                <p>{gameStats.awayBlocked} Blocks {gameStats.homeBlocked}</p>
                <progress max={maxValues.blocks} className="gamestats__blocks--reversed" value={gameStats.awayBlocked}/>
                <progress max={maxValues.blocks} value={gameStats.homeBlocked}/>
            </div>

            <div id="gamestats__faceoff">
                <p>{gameStats.awayFaceOff} Face-Off% {gameStats.homeFaceOff}</p>
                <progress max={maxValues.faceoff} className="gamestats__faceoff--reversed" value={gameStats.awayFaceOff}/>
                <progress max={maxValues.faceoff} value={gameStats.homeFaceOff}/>
            </div>

            <div id="gamestats__hits">
                <p>{gameStats.awayHits} Hits {gameStats.homeHits}</p>
                <progress max={maxValues.hits} className="gamestats__hits--reversed" value={gameStats.awayHits}/>
                <progress max={maxValues.hits} value={gameStats.homeHits}/>
            </div>
        </div>
    )
}

export default GameStats;