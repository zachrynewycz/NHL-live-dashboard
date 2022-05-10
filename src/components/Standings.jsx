import { useEffect, useState } from "react";

const Standings = () => {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        const getStandings = async () => {
            return fetch("https://statsapi.web.nhl.com/api/v1/standings")
            .then(response => response.json())
            .then(({ records }) => {
                if (standings.length) { return;}
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
        <div className="standings"> 
            <div className="standings__header">
                <p id="team">Team</p>
                <p id="records">W L OTL</p>
            </div>  
            
            {standings.sort((a,b) => a.leagueRank - b.leagueRank).map((team) =>
                <div key={team.team.id} className="standings__data">
                    <p className="standings__rank">{team.leagueRank}.</p>
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${team.team.id}.svg`}/>
                    <p className="standings__teamname">{team.team.name}</p>
                    <p className="standings__record">{team.leagueRecord.wins} {team.leagueRecord.losses} {team.leagueRecord.ot}</p>
                </div>
            )}
        </div>
    )
}

export default Standings;