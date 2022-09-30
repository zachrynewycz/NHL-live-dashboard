import axios from "axios"
import { formatGameData } from "./formatGameData"

export const fetchNextGame = async (id) => {
    const res = await axios(`https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.schedule.next`)
    const data = await res.data

    return formatGameData(data.dates[0].games[0])
} 
