import { useContext } from "react";
import { gameDataContext } from "../../context/GameDataProvider";
import { fetchGameData } from "../../services/fetchGameData";

const Header = () => {
    const [gameData, setGameData] = useContext(gameDataContext);

    const getGameData = () => {
        fetchGameData(gameData.homeID).then((data) => setGameData(data));
    };

    return (
        <>
            <div className="scoreboard__header">
                <div id={gameData.gameStatus === "Live" ? "scoreboard__status-live" : "scoreboard__status"}>
                    {gameData.gameStatus === "Live" ? gameData.gameStatus : gameData.gameStartTime}
                </div>

                <div id="scoreboard__nhl">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/nhl-logo.svg`} />
                    <p>National Hockey League</p>
                </div>

                <button title="Update Scores" id="refresh" onClick={getGameData} />
            </div>
            <hr />
        </>
    );
};

export default Header;
