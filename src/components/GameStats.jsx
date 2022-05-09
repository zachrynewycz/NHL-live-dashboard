import { useEffect, useState } from "react";
const teamData = require("../teams.json");

const GameStats = ({ gameData }) => {
    const [gameStats, setGameStats] = useState({});
    // return fetch("https://statsapi.web.nhl.com/api/v1/game/2017020659/boxscore")
    
    useEffect(() => {
        const getGameStats = async () => {
            if (!gameData) { return; }

            return fetch(`https://statsapi.web.nhl.com/api/v1/game/${gameData.gameID}/boxscore`)
            .then((response) => response.json())
            .then(({ teams }) => {
                setGameStats({
                    homeShots: teams.home.teamStats.teamSkaterStats.shots,
                    awayShots: teams.away.teamStats.teamSkaterStats.shots,
                    shotsMax: Math.max(teams.away.teamStats.teamSkaterStats.shots, teams.home.teamStats.teamSkaterStats.shots) + 8,
                    homeBlocked: teams.home.teamStats.teamSkaterStats.blocked,
                    awayBlocked: teams.away.teamStats.teamSkaterStats.blocked,
                    blockedMax: Math.max(teams.home.teamStats.teamSkaterStats.blocked, teams.away.teamStats.teamSkaterStats.blocked) + 5,
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
        getTeamColor()
    }, [gameData])

    const getTeamColor = (currentTeamID) => {
        for (let team in teamData) {
            //gets teams primary color for progress bar
            if (teamData[team].id === currentTeamID) { return teamData[team].primary }   
        }
    }

    return(
        <div className="gamestats">
            <div className="gamestats__row">
                <div className="gamestats__flex">
                    <p>{gameStats.awayShots}</p>
                    <p id="alt">Shots on Goal</p>
                    <p>{gameStats.homeShots}</p>
                </div>
                <progress max={gameStats.shotsMax} style={{accentColor: getTeamColor(gameData.awayID)}} className="gamestats__progressbar--reversed" value={gameStats.awayShots}/>
                <progress max={gameStats.shotsMax} style={{accentColor: getTeamColor(gameData.homeID)}} value={gameStats.homeShots}/>
            </div>

            <div className="gamestats__row">
                <div className="gamestats__flex">
                    <p>{gameStats.awayFaceOff}</p>
                    <p id="alt">Faceoff Win %</p>
                    <p>{gameStats.homeFaceOff}</p>
                </div>
                <progress max={gameStats.faceoffMax} style={{accentColor: getTeamColor(gameData.awayID)}} className="gamestats__progressbar--reversed" value={gameStats.awayFaceOff}/>
                <progress max={gameStats.faceoffMax} style={{accentColor: getTeamColor(gameData.homeID)}} value={gameStats.homeFaceOff}/>
            </div>

            <div className="gamestats__row">
                <div className="gamestats__flex">
                    <p>{gameStats.awayHits}</p>
                    <p id="alt">Hits</p>
                    <p>{gameStats.homeHits}</p>
                </div>
                <progress max={gameStats.hitsMax} style={{accentColor: getTeamColor(gameData.awayID)}} className="gamestats__progressbar--reversed" value={gameStats.awayHits}/>
                <progress max={gameStats.hitsMax} style={{accentColor: getTeamColor(gameData.homeID)}} value={gameStats.homeHits}/>
            </div>

            <div className="gamestats__row">
                <div className="gamestats__flex">
                    <p>{gameStats.awayBlocked}</p>
                    <p id="alt">Blocks</p>
                    <p>{gameStats.homeBlocked}</p>
                </div>
                <progress max={gameStats.blockedMax} style={{accentColor: getTeamColor(gameData.awayID)}} className="gamestats__progressbar--reversed" value={gameStats.awayBlocked}/>
                <progress max={gameStats.blockedMax} style={{accentColor: getTeamColor(gameData.homeID)}} value={gameStats.homeBlocked}/>
            </div>


        </div>
    )
}

export default GameStats;