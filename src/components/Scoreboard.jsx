import { useEffect } from "react";

const Scoreboard = ({teamID}) => {
    
    useEffect(() => {}, [teamID])
    
    return(
        <div className="Scoreboard">
            <div id="game-status"></div>
            <div id="nhl">National Hockey League</div>
            <button id="refresh"/>
            
            <p id="game-time">Start Time</p>
            <h1 id="game-score">0 - 0</h1>
            <p id="game-clock">20:00 P1</p>

            <div id="home-team">
                <img/>
                <p id="home-name">St. Louis Blues</p>
                <p id="home-record">(20, 40, 10)</p>
            </div>

            <div id="away-team">
                <img/>
                <p id="away-name">Calgary Flames</p>
                <p id="away-record">(40, 20, 10)</p>
            </div>
        </div>
    )
}

export default Scoreboard;