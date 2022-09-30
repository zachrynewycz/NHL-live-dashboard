import axios from "axios"
import { format, subDays } from "date-fns"

export const fetchLastGamesPlayed = async () => {
    const res = await axios(`https://statsapi.web.nhl.com/api/v1/schedule?&startDate=${format(subDays(new Date(), 4),"yyyy-MM-dd")}&endDate=${format(new Date(), "yyyy-MM-dd")}`)
    const data = await res.data
    let lastGames = []

    for (let day in data.dates) {       
        let dailyGames = data.dates[day].games

        for (let game in dailyGames) {
            lastGames.push(dailyGames[game])
        }
    }
    return lastGames;
}