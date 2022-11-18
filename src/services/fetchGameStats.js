import axios from "axios";

export const fetchGameStats = async (gameID) => {
    if (!gameID) return;

    const response = await axios(`https://statsapi.web.nhl.com/api/v1/game/${gameID}/boxscore`);
    const { teams } = response.data;

    return [
        {
            name: "Shots",
            home: teams.home.teamStats.teamSkaterStats.shots,
            away: teams.away.teamStats.teamSkaterStats.shots,
        },
        {
            name: "Faceoff %",
            home: teams.home.teamStats.teamSkaterStats.faceOffWinPercentage,
            away: teams.away.teamStats.teamSkaterStats.faceOffWinPercentage,
        },
        {
            name: "Blocks",
            home: teams.home.teamStats.teamSkaterStats.blocked,
            away: teams.away.teamStats.teamSkaterStats.blocked,
        },
        {
            name: "Hits",
            home: teams.home.teamStats.teamSkaterStats.hits,
            away: teams.away.teamStats.teamSkaterStats.hits,
        },
    ];
};
