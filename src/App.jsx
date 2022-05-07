import { useEffect, useState } from 'react';
import { format, differenceInDays } from 'date-fns';
//Components
import TeamSelect from './components/TeamSelect';
import Scoreboard from './components/Scoreboard';
import Standings from './components/Standings';
import UpcomingGames from './components/UpcomingGames';
import GameStats from './components/GameStats';
import './App.css';

//fix progress bar
//add pp?
//team lookup next game date

const App = () => {
  const [teamID, setTeamID] = useState("");
  const [gameData, setGameData] = useState({});
  
  useEffect(() => { 
    const getGameData = async () => {
      return fetch(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamID}&expand=schedule.linescore`)
      .then(response => response.json())
      .then(({ dates }) => { 
        //if there are games for the current day
        if (dates.length) {
          let data = dates[0].games[0]

          setGameData({
            gameStatus: data.status.abstractGameState,
            gameID: data.gamePk,
            gameStartTime: convertGameDate(data.gameDate),
            gameClock: data.linescore.currentPeriodTimeRemaining,
            period: data.linescore.currentPeriod,
            homeID: data.teams.home.team.id,
            homeName: data.teams.home.team.name,
            homeScore: data.teams.home.score,
            homeRecord: `(${data.teams.home.leagueRecord.wins} - ${data.teams.home.leagueRecord.losses}${data.teams.home.leagueRecord.ot ? `- ${data.teams.home.leagueRecord.ot}` : ""})`,
            awayID: data.teams.away.team.id,
            awayName: data.teams.away.team.name,
            awayScore: data.teams.away.score,
            awayRecord: `(${data.teams.away.leagueRecord.wins} - ${data.teams.away.leagueRecord.losses}${data.teams.away.leagueRecord.ot ? `- ${data.teams.away.leagueRecord.ot}` : ""})`
          }) 
        }})
      } 
      getGameData()
    }, [teamID])
    
    const convertGameDate = (start) => {
      let currentDate = new Date()
      let gameDate = new Date(start)

      if (differenceInDays(gameDate, currentDate) < 1) { 
        //converts to: Today 9:00 PM
        return `Today ${format(gameDate, 'p')}` 
      }
      //converts to: 4/15, 9:00 PM
      return `${format(gameDate, 'M/d, p')}`
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
        <p id="app__center--text">Game stats</p>
        <GameStats gameData={gameData}/>
      </div>

      <div className="app__right">        
        <p id="app__right--text">Upcoming games</p>
        {/* <UpcomingGames convertGameDate={convertGameDate}/> */}
      </div>
    </div>
  )
}

export default App;