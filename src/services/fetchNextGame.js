import axios from "axios"
import { formatUpcomingGameData } from "./formatUpcomingGameData"

export const fetchNextGame = async (id) => {
    const res = await axios(`https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.schedule.next`)
    const data = await res.data
    return formatUpcomingGameData(data.teams[0].nextGameSchedule.dates[0].games[0])
} 
