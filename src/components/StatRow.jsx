import teamData from "../teams.json";

const StatRow = ({ stat, gameData }) => {
    const max_addition = { Shots: 15, Faceoff: 30, Blocks: 10, Hits: 10 };

    const getProgressMax = (a, b) => {
        return Math.max(a, b) + max_addition[stat.name.split(" ")[0]];
    };

    return (
        <div className="gamestats__row">
            <div className="gamestats__away">
                <div className="flex">
                    <span>{stat.name}</span>
                    <span className="gamestats__statNumber">{stat.away}</span>
                </div>

                <progress
                    value={stat.away}
                    max={getProgressMax(stat.away, stat.home)}
                    style={{ accentColor: teamData[gameData.awayID].primary }}
                />
            </div>

            <div className="gamestats__home">
                <div className="flex">
                    <span className="gamestats__statNumber">{stat.home}</span>
                    <span>{stat.name}</span>
                </div>

                <progress
                    className="progress--reversed"
                    value={stat.home}
                    max={getProgressMax(stat.away, stat.home)}
                    style={{ accentColor: teamData[gameData.homeID].primary }}
                />
            </div>
        </div>
    );
};

export default StatRow;
