const StandingRow = ({ team }) => {
    return (
        <div className="standings__row">
            <div className="standings__teamContainer">
                <p className="standings__rank">{team.leagueRank}.</p>
                <img src={`${process.env.PUBLIC_URL}/images/svgs/${team.team.id}.svg`} />
                <p className="standings__teamname">{team.team.name}</p>
            </div>

            <div className="standings__record">
                <p>{team.leagueRecord.wins}</p>
                <p>{team.leagueRecord.losses}</p>
                <p>{team.leagueRecord.ot}</p>
            </div>
        </div>
    );
};

export default StandingRow;
