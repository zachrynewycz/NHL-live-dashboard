const Scoreboard = ({ gameData }) => {
    return (
        <div className="scoreboard">
            <div className="scoreboard__header">
                <div id={gameData.gameStatus === "Live" ? "scoreboard__status-live" : "scoreboard__status"}>
                    <span id="dot"/>
                    {gameData.gameStatus}
                </div>
                
                <div id="scoreboard__nhl">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/nhl-logo.svg`}/>
                    <p>National Hockey League</p>
                </div>
                
                <p id="scoreboard__start-time">{gameData.gameStatus === "Final" ? "" : gameData.gameStartTime}</p>
            </div>
           
            <hr/>
            
            {gameData.gameID && (
            <div className="scoreboard__interface">
                <div id="scoreboard__away">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.awayID}.svg`}/>
                    <p id="scoreboard__team-name">{gameData.awayName}</p>
                    <p id="scoreboard__team-record">{gameData.awayRecord}</p>
                </div>

                <div id="scoreboard__clockinfo">
                    <div id="scoreboard__score">
                        <span>{gameData.awayScore}</span>
                        <span style={{color: "#acacac"}}>-</span>
                        <span>{gameData.homeScore}</span>
                    </div>
                    
                    <p id="scoreboard__clock">{gameData.gameStatus === "Live" ? `${gameData.gameClock} - P${gameData.period}` : ""}</p>
                </div>

                <div id="scoreboard__home">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.homeID}.svg`}/>
                    <p id="scoreboard__team-name">{gameData.homeName}</p>
                    <p id="scoreboard__team-record">{gameData.homeRecord}</p>
                </div>
            </div>    
            )}
        </div>
    )
}

export default Scoreboard;