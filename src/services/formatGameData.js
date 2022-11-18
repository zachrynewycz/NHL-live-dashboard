import { format, differenceInDays } from "date-fns";

export const formatGameData = (data) => {
    return {
        gameID: data.gamePk,
        gameStatus: data.status.abstractGameState,
        gameStartTime: formatGameDate(data.gameDate),
        gameClock: data.linescore.currentPeriodTimeRemaining,
        period: data.linescore.currentPeriodOrdinal,
        boxScore: data.linescore.periods,
        homeID: data.teams.home.team.id,
        awayID: data.teams.away.team.id,
        homeName: data.teams.home.team.name,
        awayName: data.teams.away.team.name,
        homeScore: data.teams.home.score,
        awayScore: data.teams.away.score,
        homeRecord: `( ${data.teams.home.leagueRecord.wins} - ${data.teams.home.leagueRecord.losses} - ${data.teams.home.leagueRecord.ot} )`,
        awayRecord: `( ${data.teams.away.leagueRecord.wins} - ${data.teams.away.leagueRecord.losses} - ${data.teams.away.leagueRecord.ot} )`,
    };
};

const formatGameDate = (startDate) => {
    let gameDate = new Date(startDate);

    if (differenceInDays(new Date(), gameDate) === 0) {
        return `Today, ${format(gameDate, "p")}`;
    }
    return format(gameDate, "M/d, p");
};
