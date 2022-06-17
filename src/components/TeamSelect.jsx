const TeamSelect = ({ setTeamID }) => {
    const teamData = require("../teams.json");
    
    const changeHandler = (e) => { setTeamID(e.target.value); }   

    return (
        <>
            <select defaultValue="" onChange={changeHandler}>
                <option value="" disabled>Select your team</option>
                
                {teamData.map(({ name, id }) => (
                    <option key={id} value={id}>{name}</option>
                ))}
            </select>
        </>
    );
};

export default TeamSelect;