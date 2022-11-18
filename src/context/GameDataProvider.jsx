import { createContext, useState } from "react";

export const gameDataContext = createContext();

const GameDataProvider = (props) => {
    const [gameData, setGameData] = useState({});

    return <gameDataContext.Provider value={[gameData, setGameData]}>{props.children}</gameDataContext.Provider>;
};

export default GameDataProvider;
