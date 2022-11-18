import { useContext } from "react";
import { useEffect, useState } from "react";
import { gameDataContext } from "../../context/GameDataProvider";

const BoxScore = () => {
    const [gameData] = useContext(gameDataContext);
    const [homeBoxScore, setHomeBoxScore] = useState([]);
    const [awayBoxScore, setAwayBoxScore] = useState([]);

    useEffect(() => {
        setHomeBoxScore([]);
        setAwayBoxScore([]);

        for (let i in gameData.boxScore) {
            setHomeBoxScore((homeData) => [...homeData, gameData.boxScore[i].home.goals]);
            setAwayBoxScore((awayData) => [...awayData, gameData.boxScore[i].away.goals]);
        }
    }, [gameData]);

    return (
        <div className="boxscore">
            <div className="boxscore__header">
                <span id="status-label">Box-score</span>

                <div className="boxscore__period-label">
                    <span>1ST</span>
                    <span>2ND</span>
                    <span>3RD</span>

                    {gameData.period > 3 && <span>OT</span>}
                    <span id="boxscore--bold">T</span>
                </div>
            </div>

            <>
                <div className="boxscore__away">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.awayID}.svg`} />
                    <div className="boxscore__data">
                        <span>{awayBoxScore[0] || 0}</span>
                        <span>{awayBoxScore[1] || 0}</span>
                        <span>{awayBoxScore[2] || 0}</span>

                        {gameData.period > 3 && <span>{awayBoxScore[3]}</span>}
                        <span id="boxscore--bold">{gameData.awayScore || 0}</span>
                    </div>
                </div>

                <div className="boxscore__home">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.homeID}.svg`} />
                    <div className="boxscore__data">
                        <span>{homeBoxScore[0] || 0}</span>
                        <span>{homeBoxScore[1] || 0}</span>
                        <span>{homeBoxScore[2] || 0}</span>

                        {gameData.period > 3 && <span>{homeBoxScore[3]}</span>}
                        <span id="boxscore--bold">{gameData.homeScore || 0}</span>
                    </div>
                </div>
            </>
        </div>
    );
};

export default BoxScore;
