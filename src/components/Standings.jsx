import { useEffect, useState } from "react";
import { fetchStandings } from "../services/fetchStandings";

const Standings = () => {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        if(standings.length) return
        fetchStandings().then(data => setStandings([...data]))
    }, []);

    return (
        <div className="standings">
            <div className="standings__header">
                <p id="team">Team</p>
                <p id="records">W L OTL</p>
            </div>

            {standings
                .sort((a, b) => a.leagueRank - b.leagueRank)
                .map((team) => (
                    <div key={team.team.id} className="standings__data">
                        <p className="standings__rank">{team.leagueRank}.</p>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/svgs/${team.team.id}.svg`}
                        />
                        <p className="standings__teamname">{team.team.name}</p>
                        <p className="standings__record">
                            {team.leagueRecord.wins} {team.leagueRecord.losses}{" "}
                            {team.leagueRecord.ot}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default Standings;
