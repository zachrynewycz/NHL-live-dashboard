import "./App.css";
import TeamSelect from "./components/TeamSelect/TeamSelect";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Standings from "./components/Standings/Standings";
import LastGames from "./components/LastGames/LastGames";
import GameStats from "./components/GameStats/GameStats";
import BoxScore from "./components/BoxScore/BoxScore";
import StoreLink from "./components/Store/StoreLink";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GameDataProvider from "./context/GameDataProvider";

const App = () => {
    return (
        <div className="app">
            <GameDataProvider>
                <ToastContainer />
                <TeamSelect />

                <div className="app__left">
                    <p id="app__left--text">Standings</p>
                    <Standings />
                </div>

                <div className="app__center">
                    <Scoreboard />
                    <GameStats />
                </div>

                <div className="app__right">
                    <BoxScore />
                    <StoreLink />

                    <p id="app__right--last">Last games</p>
                    <LastGames />
                </div>
            </GameDataProvider>
        </div>
    );
};

export default App;
