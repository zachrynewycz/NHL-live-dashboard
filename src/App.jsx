import { useEffect, useState } from "react";
import "./App.css";

import TeamSelect from "./components/TeamSelect";
import Scoreboard from "./components/Scoreboard";
import Standings from "./components/Standings";
import LastGames from "./components/LastGames";
import GameStats from "./components/GameStats";
import BoxScore from "./components/BoxScore";
import StoreLink from "./components/StoreLink";

import { fetchGameData } from "./services/fetchGameData";
import { fetchNextGame } from "./services/fetchNextGame";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [teamID, setTeamID] = useState(sessionStorage.getItem("ID") || "");
    const [gameData, setGameData] = useState({});

    useEffect(() => {
        getGameData()
    }, [])

    useEffect(() => {
        sessionStorage.setItem("ID", teamID)
        getGameData()
    }, [teamID])
    
    const getGameData = () => {
        fetchGameData(teamID)
        .then(data => setGameData(data))
        .catch(() => {
            fetchNextGame(teamID)
            .then(data => setGameData(data))
            .catch(() => toast.info('No upcoming games found.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
            }))
        })
    }

    return (
        <div className="app">
            <ToastContainer/>
            <TeamSelect setTeamID={setTeamID} />

            <div className="app__left">
                <p id="app__left--text">Standings</p>
                <Standings />
            </div>
            
            <div className="app__center">
                <Scoreboard gameData={gameData} getGameData={getGameData}/>
                <GameStats gameData={gameData} />
            </div>
            
            <div className="app__right">
                <BoxScore gameData={gameData} />
                <StoreLink />

                <p id="app__right--last">Last games</p>
                <LastGames />
            </div>
        </div>
    );
};

export default App;
