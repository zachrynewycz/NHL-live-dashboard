import { useContext, useState, useEffect } from "react";
import { fetchNextGame } from "../../services/fetchNextGame";
import { fetchGameData } from "../../services/fetchGameData";
import { toast } from "react-toastify";
import { gameDataContext } from "../../context/GameDataProvider";
import teamData from "../../teams.json";
import "react-toastify/dist/ReactToastify.css";

const TeamSelect = () => {
    const [teamID, setTeamID] = useState("");
    const [gameData, setGameData] = useContext(gameDataContext);

    const handleTeamChange = (e) => {
        setTeamID(e.target.value);
    };

    useEffect(() => {
        getGameData();
    }, [teamID]);

    const getGameData = () => {
        fetchGameData(teamID)
            .then((data) => setGameData(data))
            .catch(() => {
                fetchNextGame(teamID)
                    .then((data) => setGameData(data))
                    .catch(() =>
                        toast.info("No upcoming games found.", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                        })
                    );
            });
    };

    return (
        <select defaultValue="" onChange={handleTeamChange}>
            <option value="" disabled>
                Select your team
            </option>

            {Object.keys(teamData).map((team) => (
                <option key={team} value={team}>
                    {teamData[team].name}
                </option>
            ))}
        </select>
    );
};

export default TeamSelect;
