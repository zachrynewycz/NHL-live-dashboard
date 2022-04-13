import { useState } from 'react';
import TeamSelect from './components/TeamSelect';
import Scoreboard from './components/Scoreboard';
import './App.css';

const App = () => {
  const [teamID, setTeamID] = useState("");

  return (
    <div className="App">
      <div id="left">
        <TeamSelect setTeamID={setTeamID}/>
      </div>

      <div id="center">
        <Scoreboard teamID={teamID}/>
      </div>

      <div id="right">
        <h1>hi</h1>
      </div>
    </div>
  )
}

export default App;