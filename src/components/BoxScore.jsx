import { useEffect, useState } from "react";

const BoxScore = ({ gameData }) => {
const [homeData, setHomeData] = useState([])
const [awayData, setAwayData] = useState([])

    useEffect(() => {
        for (let i in gameData.boxScore) {
            setHomeData((homeData) => [...homeData, gameData.boxScore[i].home.goals])
            setAwayData((awayData) => [...awayData, gameData.boxScore[i].away.goals])
        }
    }, [gameData])
    
    return (
        <div className="boxscore">   
            <div className="boxscore__header">
                <span id="status-label">{gameData.gameStatus}</span>
                <span>1ST 2ND 3RD {homeData[3] ? "OT" : ""} T</span>
            </div>
            
            <div>
                <div className="boxscore__away">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.awayID}.svg`}/>
                    <p>{awayData[0] || 0} {awayData[1] || 0} {awayData[2] || 0} {awayData[3] ? awayData[3] : ""} {gameData.awayScore || 0}</p>
                </div>

                <div className="boxscore__home">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.homeID}.svg`}/>
                    <p>{homeData[0] || 0} {homeData[1] || 0} {homeData[2] || 0} {homeData[3] ? homeData[3] : ""} {gameData.homeScore || 0}</p>

                </div>
                
            </div>
        </div>
    )
}

export default BoxScore;