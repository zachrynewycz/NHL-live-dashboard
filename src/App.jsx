import { useEffect, useState } from 'react';
//Date-fns
import { format, differenceInDays } from 'date-fns';
//Components
import TeamSelect from './components/TeamSelect';
import Scoreboard from './components/Scoreboard';
import Standings from './components/Standings';
import LastGames from './components/LastGames';
import GameStats from './components/GameStats';
import BoxScore from './components/BoxScore';
import StoreLink from './components/StoreLink';
import './App.css';

const App = () => {
  const [teamID, setTeamID] = useState("");
  const [gameData, setGameData] = useState({});
  const [endDate, setEndDate] = useState("")

  useEffect(() => { 
    getSeasonEndDate()
    getGameData()
  }, [teamID])
  
  const handleData = (data) => {
    setGameData({
      gameID: data.gamePk,
      gameStatus: data.status.abstractGameState,
      gameStartTime: convertGameDate(data.gameDate),
      gameClock: data.linescore.currentPeriodTimeRemaining,
      period: data.linescore.currentPeriod,
      boxScore: data.linescore.periods,
      homeID: data.teams.home.team.id,
      awayID: data.teams.away.team.id,
      homeName: data.teams.home.team.name,
      awayName: data.teams.away.team.name,
      homeScore: data.teams.home.score,
      awayScore: data.teams.away.score,
      homeRecord: `(${data.teams.home.leagueRecord.wins} - ${data.teams.home.leagueRecord.losses}${data.teams.home.leagueRecord.ot ? `- ${data.teams.home.leagueRecord.ot}` : ""})`,
      awayRecord: `(${data.teams.away.leagueRecord.wins} - ${data.teams.away.leagueRecord.losses}${data.teams.away.leagueRecord.ot ? `- ${data.teams.away.leagueRecord.ot}` : ""})`
    }) 
  }

  const getGameData = async () => {
    //Used for games that are played ONLY on the current day
    return fetch(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamID}&expand=schedule.linescore`)
    .then(response => response.json())
    .then(({ dates }) => { dates.length ? handleData(dates[0].games[0]) : getNextGame() })
  } 
  
  const getNextGame = async () => {
    //Checks selected teams games on further dates
    return fetch(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamID}&startDate=${format(new Date(), 'yyyy-MM-dd')}&endDate=${endDate}&expand=schedule.linescore`)
    .then(response => response.json())
    .then(({ dates }) => { handleData(dates[0].games[0]) })
    .catch(() => alert("There are no upcoming games for this team"))
  }  

  const getSeasonEndDate = async () => {
    return fetch("https://statsapi.web.nhl.com/api/v1/seasons/current")
    .then(response => response.json())
    .then(({ seasons }) => setEndDate(seasons[0].seasonEndDate))
  }  
  
  const convertGameDate = (gameStart) => {
    let gameDate = new Date(gameStart)
    //Show that game is "Today" if is current day
    return differenceInDays(new Date(), gameDate) == 0 ? `Today ${format(gameDate, 'p')}` : format(gameDate, 'M/d, p')
  }

  return (
    <div className="app">
      <TeamSelect teamId={teamID} setTeamID={setTeamID}/>
      
      <div className="app__left">
        <p id="app__left--text">Standings</p>
        <Standings/>
      </div>

      <div className="app__center">
        <Scoreboard gameData={gameData}/>
        <GameStats gameData={gameData}/>
      </div>

      <div className="app__right">    
        <BoxScore gameData={gameData}/>
        <StoreLink/>

        <hr/>
        <p id="app__right--last">Last games</p>
        
        <LastGames/>
      </div>
    </div>
  )
}

export default App;