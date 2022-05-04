import { useEffect, useState } from "react";

const Standings = () => {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        const getStandings = async () => {
            return fetch("https://statsapi.web.nhl.com/api/v1/standings")
            .then(response => response.json())
            .then(({ records }) => {
                //api gets records by division
                for (let division in records) {
                    let data = records[division].teamRecords
                    //get each teams league records
                    for (let team in data) {
                        setStandings((standings) => [...standings, data[team]]);
                    }
                }
            })
        }
        getStandings()
    }, [])

    return(
        <table className="standings">   
            <tr>
                <th>Team</th>
                <th>W</th>
                <th>L</th>
                <th>OTL</th>
            </tr>
            
            {standings.sort((a,b) => a.leagueRank - b.leagueRank).map((team) =>
                <tr className="standings__data">
                    <td className="standings__rank">{team.leagueRank}.</td>
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${team.team.id}.svg`}/>
                    <td className="standings__teamname">{team.team.name}</td>
                    <td className="standings__record">{team.leagueRecord.wins} {team.leagueRecord.losses} {team.leagueRecord.ot}</td>
                </tr>
            )}
        </table>
    )
}

export default Standings;