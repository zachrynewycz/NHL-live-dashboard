import { useEffect, useState } from "react";

const GameStats = ({ gameData }) => {
    const [gameStats, setGameStats] = useState({});
    // return fetch("https://statsapi.web.nhl.com/api/v1/game/2017020659/boxscore")
    
    useEffect(() => {
        const getGameStats = async () => {
            if (!gameData.gameID) {return;}
            return fetch(`https://statsapi.web.nhl.com/api/v1/game/${gameData.gameID}/boxscore`)
            .then((response) => response.json())
            .then(({ teams }) => {
                setGameStats({
                    homeShots: teams.home.teamStats.teamSkaterStats.shots,
                    awayShots: teams.away.teamStats.teamSkaterStats.shots,
                    shotsMax: Math.max(teams.away.teamStats.teamSkaterStats.shots, teams.home.teamStats.teamSkaterStats.shots) + 10,
                    homeBlocked: teams.home.teamStats.teamSkaterStats.blocked,
                    awayBlocked: teams.away.teamStats.teamSkaterStats.blocked,
                    blockedMax: Math.max(teams.home.teamStats.teamSkaterStats.blocked, teams.away.teamStats.teamSkaterStats.blocked) + 10,
                    homeFaceOff: teams.home.teamStats.teamSkaterStats.faceOffWinPercentage,
                    awayFaceOff: teams.away.teamStats.teamSkaterStats.faceOffWinPercentage,
                    faceoffMax: Math.max(teams.home.teamStats.teamSkaterStats.faceOffWinPercentage, teams.away.teamStats.teamSkaterStats.faceOffWinPercentage) + 25,
                    homeHits: teams.home.teamStats.teamSkaterStats.hits,
                    awayHits: teams.away.teamStats.teamSkaterStats.hits,
                    hitsMax: Math.max(teams.home.teamStats.teamSkaterStats.hits, teams.away.teamStats.teamSkaterStats.hits) + 15
                })
            })
        }
        getGameStats()
    }, [gameData])

    return(
        <div className="gamestats">
            <div id="gamestats__shots">
                <p>{gameStats.awayShots} Shots {gameStats.homeShots}</p>
                <progress max={gameStats.shotsMax} className="gamestats__progress--reversed" value={gameStats.awayShots}/>
                <progress max={gameStats.shotsMax} value={gameStats.homeShots}/>
            </div>

            <div id="gamestats__blocks">
                <p>{gameStats.awayBlocked} Blocks {gameStats.homeBlocked}</p>
                <progress max={gameStats.blockedMax} className="gamestats__progress--reversed" value={gameStats.awayBlocked}/>
                <progress max={gameStats.blockedMax} value={gameStats.homeBlocked}/>
            </div>

            <div id="gamestats__faceoff">
                <p>{gameStats.awayFaceOff} Face-off% {gameStats.homeFaceOff}</p>
                <progress max={gameStats.faceoffMax} className="gamestats__progress--reversed" value={gameStats.awayFaceOff}/>
                <progress max={gameStats.faceoffMax} value={gameStats.homeFaceOff}/>
            </div>

            <div id="gamestats__hits">
                <p>{gameStats.awayHits} Hits {gameStats.homeHits}</p>
                <progress max={gameStats.hitsMax} className="gamestats__progress--reversed" value={gameStats.awayHits}/>
                <progress max={gameStats.hitsMax} value={gameStats.homeHits}/>
            </div>
        </div>
    )
}

export default GameStats;