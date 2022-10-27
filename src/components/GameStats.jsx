import { useEffect, useState } from "react";
import { fetchGameStats } from "../services/fetchGameStats";
import StatRow from "./StatRow";

const GameStats = ({ gameData }) => {
    const [gameStats, setGameStats] = useState([]);

    useEffect(() => {
        fetchGameStats(gameData.gameID).then((data) => data && setGameStats([...data]));
    }, [gameData]);

    return (
        <div className="gamestats">
            {gameStats.map((stat, i) => (
                <StatRow key={i} stat={stat} gameData={gameData} />
            ))}
        </div>
    );
};

export default GameStats;
