const TeamSelect = ({setTeamID}) => {
    const teamData = require("../teams.json");
    
    const changeHandler = (e) => { setTeamID(e.target.value); }   

    return (
        <div className="team-select">
            <select defaultValue="" onChange={changeHandler}>
                <option value="" disabled>Select team</option>
                
                {teamData.map(({ name, id }) => (
                    <option key={id} value={id}>{name}</option>
                ))}
            </select>
        </div>
    );
};

export default TeamSelect;
