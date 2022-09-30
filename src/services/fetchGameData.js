import axios from "axios";
import {formatGameData} from "./formatGameData";

export const fetchGameData = async (id) => {
    const res = await axios(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${id}&expand=schedule.linescore`);
    const data = await res.data
    if (data.dates) return formatGameData(data.dates[0].games[0])
};
