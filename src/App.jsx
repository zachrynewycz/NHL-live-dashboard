import { useEffect, useState } from 'react';
import TeamSelect from './components/TeamSelect';
import Scoreboard from './components/Scoreboard';
import Standings from './components/Standings';
import UpcomingGames from './components/UpcomingGames';
import './App.css';

const App = () => {
  const [teamID, setTeamID] = useState("");
  const [gameData, setGameData] = useState({});

  useEffect(() => {}, [gameData])
  
  useEffect(() => { 
    const getGameData = async () => {
      return fetch(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamID}&expand=schedule.linescore`)
      .then(response => response.json())
      .then(({ dates }) => { 
        //Check if there are games for the current day
        if(dates.length) {
          let data = dates[0].games[0]
       
          setGameData({
            gameStatus: data.status.abstractGameState,
            gameStartTime: convertGameDate(data.gameDate),
            gameClock: data.linescore.currentPeriodTimeRemaining,
            period: data.linescore.currentPeriod,
            isIntermission: data.linescore.intermissionInfo.isIntermission,
            homeID: data.teams.home.team.id,
            homeName: data.teams.home.team.name,
            homeScore: data.teams.home.score,
            homeRecord: `(${data.teams.home.leagueRecord.wins}, ${data.teams.home.leagueRecord.losses}, ${data.teams.home.leagueRecord.ot})`,
            awayID: data.teams.away.team.id,
            awayName: data.teams.away.team.name,
            awayScore: data.teams.away.score,
            awayRecord: `(${data.teams.away.leagueRecord.wins}, ${data.teams.away.leagueRecord.losses}, ${data.teams.away.leagueRecord.ot})`
          }) 
        }})
      } 
      getGameData()
      
    }, [teamID])
    
    const convertGameDate = (start) => {
      //converts to: 4/15, 9:00 PM
      let date = new Date(start).toLocaleString();
      return `${date.slice(0,4)}, ${date.slice(11,15)} ${date.slice(-2)}`
    }

    return (
      <div className="App">
      <div id="left">
        <TeamSelect teamId={teamID} setTeamID={setTeamID}/>
        <Standings/>
      </div>

      <div id="center">
        <Scoreboard gameData={gameData}/>
      </div>

      <div id="right">
        <UpcomingGames/>
      </div>
    </div>
  )
}

export default App;