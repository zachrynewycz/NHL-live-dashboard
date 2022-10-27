import teamData from "../teams.json";

const TeamSelect = ({ setTeamID }) => {
    const handleTeamChange = (e) => {
        setTeamID(e.target.value);
    };

    return (
        <>
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
        </>
    );
};

export default TeamSelect;
