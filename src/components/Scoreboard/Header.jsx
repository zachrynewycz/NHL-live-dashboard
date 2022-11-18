import { useContext } from "react";
import { gameDataContext } from "../../context/GameDataProvider";

const Header = () => {
    const [gameData] = useContext(gameDataContext);

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
            </div>
            <hr />
        </>
    );
};

export default Header;
