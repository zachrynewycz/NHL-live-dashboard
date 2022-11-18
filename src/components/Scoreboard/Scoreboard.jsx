import { useContext } from "react";
import { gameDataContext } from "../../context/GameDataProvider";
import Header from "./Header";

const Scoreboard = () => {
    const [gameData] = useContext(gameDataContext);

    return (
        <div className="scoreboard">
            <Header />

            {gameData.gameID && (
                <div className="scoreboard__interface">
                    <div id="scoreboard__away">
                        <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.awayID}.svg`} />
                        <p id="scoreboard__team-name">{gameData.awayName}</p>
                        <p id="scoreboard__team-record">{gameData.awayRecord}</p>
                    </div>

                    <div id="scoreboard__clockinfo">
                        <div id="scoreboard__score">
                            <span>{gameData.awayScore}</span>
                            <span>-</span>
                            <span>{gameData.homeScore}</span>
                        </div>

                        <p id="scoreboard__clock">
                            {gameData.gameStatus === "Live" && `${gameData.gameClock} - ${gameData.period}`}
                        </p>
                    </div>

                    <div id="scoreboard__home">
                        <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.homeID}.svg`} />
                        <p id="scoreboard__team-name">{gameData.homeName}</p>
                        <p id="scoreboard__team-record">{gameData.homeRecord}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Scoreboard;
