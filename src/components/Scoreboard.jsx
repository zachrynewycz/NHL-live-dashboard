const Scoreboard = ({ gameData }) => {
    return(
        <div className="scoreboard">
            <div id="scoreboard__heading">
                <div id="scoreboard__gamestatus">{gameData.gameStatus}</div>
                <div id="scoreboard__nhl">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/nhl-logo.svg`}></img>
                    <p>National Hockey League</p>
                </div>
                <p id="scoreboard__date" >{gameData.gameStartTime}</p>
            </div>
            <hr/>
            
            <div id="scoreboard__ui">
                <div id="scoreboard__away">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.awayID}.svg`}/>
                    <p id="scoreboard__away--name">{gameData.awayName}</p>
                    <p id="scoreboard__away--record">{gameData.awayRecord}</p>
                </div>

                <div id="scoreboard__clockinfo">
                    <h1 id="scoreboard__score">{gameData.awayScore}<span id="scoreboard__score--dash">-</span>{gameData.homeScore}</h1>
                    <p id="scoreboard__clock">{gameData.gameClock} - P{gameData.period}</p>
                </div>

                <div id="scoreboard__home">
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${gameData.homeID}.svg`}/>
                    <p id="scoreboard__home--name">{gameData.homeName}</p>
                    <p id="scoreboard__home--record">{gameData.homeRecord}</p>
                </div>
            </div>

        </div>
    )
}

export default Scoreboard;