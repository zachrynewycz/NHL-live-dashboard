const Scoreboard = ({ gameData }) => {
    return(
        <div className="scoreboard">
            <div id="game-status">{gameData.gameStatus}</div>
            <div id="nhl">National Hockey League</div>
            <hr/>
            
            <p id="game-date">{gameData.gameStartTime}</p>
            <h1 id="game-score">{`${gameData.awayScore}-${gameData.homeScore}`}</h1>
            <p id="game-clock" style={{display: gameData.gameStatus === "Final" || gameData.gameStatus === "Preview" ? "none" : ""}}>{gameData.gameClock} P{gameData.period}</p>

            <div id="away-team">
                <img src={`${process.env.PUBLIC_URL}/images/${gameData.awayID}.png`}/>
                <p id="away-name">{gameData.awayName}</p>
                <p id="away-record">{gameData.awayRecord}</p>
            </div>

            <div id="home-team">
                <img src={`${process.env.PUBLIC_URL}/images/${gameData.homeID}.png`}/>
                <p id="home-name">{gameData.homeName}</p>
                <p id="home-record">{gameData.homeRecord}</p>
            </div>
        </div>
    )
}

export default Scoreboard;