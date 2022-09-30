import axios from "axios"

export const fetchStandings = async () => {
    const res = await axios("https://statsapi.web.nhl.com/api/v1/standings");
    const data = await res.data;
    let standings = []

    for (let i in data.records) {
        let division = data.records[i]
        //Get each team in the division
        for (let j in division.teamRecords) {
            standings.push(division.teamRecords[j])
        }
    }
    return standings;
}