import teamData from "../teams.json"

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

                {teamData.map(({ name, id }) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
        </>
    );
};

export default TeamSelect;
