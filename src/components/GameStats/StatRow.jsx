import teamData from "../../assets/teams.json";
import ProgressBar from "@ramonak/react-progress-bar";

const StatRow = ({ stat, gameData }) => {
    const max_addition = {
        Shots: 15,
        Faceoff: 30,
        Blocks: 10,
        Hits: 10,
    };

    const findMaxProgressBarValue = (a, b) => {
        return Math.max(a, b) + max_addition[stat.name.split(" ")[0]];
    };

    return (
        <div className="gamestats__row">
            <div className="gamestats__away">
                <div className="flex">
                    <span>{stat.name}</span>
                    <span className="statValue">{stat.away}</span>
                </div>

                <ProgressBar
                    isLabelVisible={false}
                    className="progressbar"
                    height="16px"
                    baseBgColor="#eaeaea"
                    completed={stat.away}
                    bgColor={teamData[gameData.awayID].primary}
                    maxCompleted={findMaxProgressBarValue(stat.away, stat.home)}
                />
            </div>

            <div className="gamestats__home">
                <div className="flex">
                    <span className="statValue">{stat.home}</span>
                    <span>{stat.name}</span>
                </div>

                <ProgressBar
                    isLabelVisible={false}
                    height="16px"
                    className="progressbar"
                    dir="rtl"
                    baseBgColor="#eaeaea"
                    completed={stat.home}
                    bgColor={teamData[gameData.homeID].primary}
                    maxCompleted={findMaxProgressBarValue(stat.away, stat.home)}
                />
            </div>
        </div>
    );
};

export default StatRow;
