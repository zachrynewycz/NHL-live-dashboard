import { useEffect, useState } from "react";
const teamData = require("../teams.json");

const GameStats = ({ gameData }) => {
    const [gameStats, setGameStats] = useState([]);
    const max_addition = {Shots: 15, Faceoff: 30, Blocks: 15, Hits: 10}
    // return fetch("https://statsapi.web.nhl.com/api/v1/game/2017020659/boxscore")


    useEffect(() => {
        const getGameStats = async () => {
            if (!gameData.gameID) { return; }

            return fetch(`https://statsapi.web.nhl.com/api/v1/game/${gameData.gameID}/boxscore`)
            .then((response) => response.json())
            .then(({ teams }) => {
                setGameStats([
                    {
                        name: "Shots",
                        home: teams.home.teamStats.teamSkaterStats.shots,
                        away: teams.away.teamStats.teamSkaterStats.shots
                    },
                    {
                        name: "Faceoff %",
                        home: teams.home.teamStats.teamSkaterStats.faceOffWinPercentage,
                        away: teams.away.teamStats.teamSkaterStats.faceOffWinPercentage
                    },
                    {
                        name: "Blocks",
                        home: teams.home.teamStats.teamSkaterStats.blocked,
                        away: teams.away.teamStats.teamSkaterStats.blocked,
                    },
                    {
                        name: "Hits",
                        home: teams.home.teamStats.teamSkaterStats.hits,
                        away: teams.away.teamStats.teamSkaterStats.hits
                    }
                ])
            })
        }
        getGameStats()
    }, [gameData])

    const getTeamColor = (currentTeamID) => {
        //Gets the teams primary logo color for progress bar
        for (let i in teamData) {
            if (teamData[i].id === currentTeamID) { return teamData[i].primary }   
        }
    }

    return (
        <div className="gamestats">
            {gameStats.map((stat) => 
                <div key={Math.random()} className="gamestats__row">
                    <div className="gamestats__away">
                        <div className="flex">
                            <span>{stat.name}</span>
                            <span>{stat.away}</span>
                        </div>

                        <progress 
                            value={stat.away} 
                            max={Math.max(stat.home, stat.away) + max_addition[stat.name.split(" ")[0]]}
                            style={{accentColor: getTeamColor(gameData.awayID)}}
                        />
                    </div>
                    
                    <div className="gamestats__home">
                        <div className="flex">
                            <span>{stat.home}</span>
                            <span>{stat.name}</span>
                        </div>
                        
                        <progress 
                            className="progress--reversed" 
                            value={stat.home} 
                            max={Math.max(stat.home, stat.away) + max_addition[stat.name.split(" ")[0]]}
                            style={{accentColor: getTeamColor(gameData.homeID)}}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default GameStats;