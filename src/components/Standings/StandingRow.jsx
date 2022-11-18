const StandingRow = ({ team }) => {
    return (
        <div className="standings__row">
            <div className="standings__teamContainer">
                <img src={`${process.env.PUBLIC_URL}/images/svgs/${team.team.id}.svg`} />
                <h1 className="standings__teamname">{team.team.name}</h1>
            </div>

            <div className="standings__record">
                <p>{team.leagueRecord.wins}</p>
                <p>{team.leagueRecord.losses}</p>
                <p>{team.leagueRecord.ot}</p>
                <p>{team.points}</p>
            </div>
        </div>
    );
};

export default StandingRow;
