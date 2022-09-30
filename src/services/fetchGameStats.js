import axios from "axios"

export const fetchGameStats = async (gameID) => {
    if (!gameID) return

    const res = await axios(`https://statsapi.web.nhl.com/api/v1/game/${gameID}/boxscore`)
    const data = res.data

    return [
        {
            name: "Shots",
            home: data.teams.home.teamStats.teamSkaterStats.shots,
            away: data.teams.away.teamStats.teamSkaterStats.shots,
        },
        {
            name: "Faceoff %",
            home: data.teams.home.teamStats.teamSkaterStats.faceOffWinPercentage,
            away: data.teams.away.teamStats.teamSkaterStats.faceOffWinPercentage,
        },
        {
            name: "Blocks",
            home: data.teams.home.teamStats.teamSkaterStats.blocked,
            away: data.teams.away.teamStats.teamSkaterStats.blocked,
        },
        {
            name: "Hits",
            home: data.teams.home.teamStats.teamSkaterStats.hits,
            away: data.teams.away.teamStats.teamSkaterStats.hits,
        }
    ]
}