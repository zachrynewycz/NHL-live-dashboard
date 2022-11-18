import { useEffect, useState } from "react";
import { fetchLastGamesPlayed } from "../../services/fetchLastGamesPlayed";
import LastGameRow from "./LastGameRow";

const LastGames = () => {
    const [lastGames, setLastGames] = useState([]);

    useEffect(() => {
        fetchLastGamesPlayed().then((data) => setLastGames([...data]));
    }, []);

    return (
        <div className="lastgames">
            {lastGames
                .filter((game) => game.status.abstractGameState !== "Preview" && game.status.abstractGameState !== "Live")
                .reverse()
                .map((game) => (
                    <LastGameRow key={game.gamePk} game={game} />
                ))}
        </div>
    );
};

export default LastGames;
