import { useEffect, useState } from "react";
import { fetchStandings } from "../services/fetchStandings";
import StandingRow from "./StandingRow";

const Standings = () => {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        if(standings.length) return
        fetchStandings().then(data => setStandings([...data]))
    }, []);

    return (
        <div className="standings">
            <div className="standings__header">
                <div>Team</div>
                <div id="records">
                    <p>W</p>
                    <p>L</p>
                    <p>OTL</p>
                </div>
            </div>

            {standings
            .sort((a, b) => a.leagueRank - b.leagueRank)
            .map(team => <StandingRow key={team.team.id} team={team}/>
            )}
        </div>
    );
};

export default Standings;
