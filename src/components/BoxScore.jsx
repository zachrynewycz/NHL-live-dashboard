import { useEffect, useState } from "react";

const BoxScore = ({ gameData }) => {
const [homeData, setHomeData] = useState({})
const [awayData, setAwayData] = useState({})
    
    useEffect(() => {

    }, [gameData])
    
    return (
        <div className="boxscore">   
            <div className="boxscore__header"/>
            
            <div className="boxscore__home">
            </div>
            
            <div className="boxscore__away">
            </div>
        </div>
    )
}

export default BoxScore;