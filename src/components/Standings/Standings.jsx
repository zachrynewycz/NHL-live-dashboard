import { useEffect, useState, useCallback } from "react";
import { fetchStandings } from "../../services/fetchStandings";
import StandingRow from "./StandingRow";
import Header from "./Header";

const Standings = () => {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        getStandings();
    }, []);

    const getStandings = useCallback(() => {
        fetchStandings().then((data) => setStandings([...data]));
    }, []);

    return (
        <div className="standings">
            <Header />

            {standings
                .sort((a, b) => a.leagueRank - b.leagueRank)
                .map((team) => (
                    <StandingRow key={team.team.id} team={team} />
                ))}
        </div>
    );
};

export default Standings;
