const Scoreboard = ({ gameData }) => {
    return(
        <div className="scoreboard">
            <div id="scoreboard__heading">
                <div id="scoreboard__gamestatus">{gameData.gameStatus}</div>
                <img src={`${process.env.PUBLIC_URL}/images/svgs/nhl-logo.svg`}></img>
                <div id="nhl">National Hockey League</div>
                <hr/>
            </div>
            
            <p id="scoreboard__game-date" style={{display: gameData.gameStatus === "Live" ? "none" : "block"}}>{gameData.gameStartTime}</p>
            <h1 id="scoreboard__game-score">{`${gameData.awayScore}-${gameData.homeScore}`}</h1>
            <p id="scoreboard__game-clock" style={{display: gameData.gameStatus === "Final" || gameData.gameStatus === "Preview" ? "none" : ""}}>{gameData.gameClock} P{gameData.period}</p>

            <div id="scoreboard__away">
                <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.awayID}.svg`}/>
                <p id="scoreboard__away-name">{gameData.awayName}</p>
                <p id="scoreboard__away-record">{gameData.awayRecord}</p>
            </div>

            <div id="scoreboard__home">
                <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.homeID}.svg`}/>
                <p id="scoreboard__home-name">{gameData.homeName}</p>
                <p id="scoreboard__home-record">{gameData.homeRecord}</p>
            </div>
        </div>
    )
}

export default Scoreboard;