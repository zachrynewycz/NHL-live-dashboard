import { useEffect, useState } from "react";

const Standings = () => {
    const [standings, setStandings] = useState([]);

    useEffect(() => {}, [standings])

    useEffect(() => {
        const getStandings = async () => {
            return fetch("https://statsapi.web.nhl.com/api/v1/standings")
            .then(response => response.json())
            .then(({ records }) => {
                //api gets records by division
                // if (!standings.length) {
                //     for (let division in records) {
                //         let data = records[division].teamRecords
                //         //get each teams league records
                //         for (let team in data) {
                //             setStandings((standings) => [...standings, data[team]]);
                //         }
                //     }
                // }
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
        <div className="standings">   
            <div id="standing-header">Team &emsp; &emsp; W L OTL</div>
            
            {standings.sort((a,b) => a.leagueRank - b.leagueRank).map((team) =>
                <div className="standing-data">
                    <p>{team.leagueRank}.</p>
                    <img src={`${process.env.PUBLIC_URL}/images/${team.team.id}.png`}/>
                    <p>{team.team.name}</p>
                    <p>{team.leagueRecord.wins} {team.leagueRecord.losses} {team.leagueRecord.ot}</p>
                </div>
            )}
        </div>
    )
}

export default Standings;