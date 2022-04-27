const Scoreboard = ({ gameData }) => {
    return(
        <div className="scoreboard">
            <div id="scoreboard__game-status">{gameData.gameStatus}</div>
            <div id="nhl">National Hockey League</div>
            <hr/>
            
            <p id="scoreboard__game-date">{gameData.gameStartTime}</p>
            <h1 id="scoreboard__game-score">{`${gameData.awayScore}-${gameData.homeScore}`}</h1>
            <p id="scoreboard__game-clock" style={{display: gameData.gameStatus === "Final" || gameData.gameStatus === "Preview" ? "none" : ""}}>{gameData.gameClock} P{gameData.period}</p>

            <div id="scoreboard__away">
                <img src={`${process.env.PUBLIC_URL}/images/${gameData.awayID}.png`}/>
                <p id="scoreboard__away-name">{gameData.awayName}</p>
                <p id="scoreboard__away-record">{gameData.awayRecord}</p>
            </div>

            <div id="scoreboard__home">
                <img src={`${process.env.PUBLIC_URL}/images/${gameData.homeID}.png`}/>
                <p id="scoreboard__home-name">{gameData.homeName}</p>
                <p id="scoreboard__home-record">{gameData.homeRecord}</p>
            </div>
        </div>
    )
}

export default Scoreboard;