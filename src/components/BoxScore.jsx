import { useEffect, useState } from "react";

const BoxScore = ({ gameData }) => {
const [homeData, setHomeData] = useState([])
const [awayData, setAwayData] = useState([])

    useEffect(() => {
        setHomeData([]);
        setAwayData([]);
        
        for (let i in gameData.boxScore) {
            setHomeData((homeData) => [...homeData, gameData.boxScore[i].home.goals])
            setAwayData((awayData) => [...awayData, gameData.boxScore[i].away.goals])
        }
    }, [gameData])
    
    return (
        <div className="boxscore">   
            <div className="boxscore__header">
                <span id="status-label">Boxscore</span>
                <div className="boxscore__period-label">
                    <span>1ST</span>
                    <span>2ND</span>
                    <span>3RD</span>
                    {gameData.period >= 4 ? <span>OT</span> : ""}
                    <span id="boxscore--bold">T</span>
                </div>
            </div>
            
            <>
                <div className="boxscore__away">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.awayID}.svg`}/>
                    <div className="boxscore__data">
                        <span>{awayData[0] || 0}</span>
                        <span>{awayData[1] || 0}</span>
                        <span>{awayData[2] || 0}</span>
                        
                        {gameData.period >= 4 ? <span>{awayData[3]}</span> : ""}
                        <span id="boxscore--bold">{gameData.awayScore || 0}</span>
                    </div>
                </div>

                <div className="boxscore__home">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.homeID}.svg`}/>
                    <div className="boxscore__data">
                        <span>{homeData[0] || 0}</span>
                        <span>{homeData[1] || 0}</span>
                        <span>{homeData[2] || 0}</span>
                        
                        {gameData.period >= 4 ? <span>{homeData[3]}</span> : ""}
                        <span id="boxscore--bold">{gameData.homeScore || 0}</span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default BoxScore;