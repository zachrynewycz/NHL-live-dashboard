import { format } from "date-fns";

const LastGameRow = ({ game }) => {
    return (  
        <>
            <div className="lastgames__game">
                <div className="lastgames__scoreContainer">
                    <div className="lastgames__team" style={{
                        color: game.teams.away.score < game.teams.home.score && "#808080"
                    }}>
                        
                        <div className="lastgames__teamInfo">
                            <img src={`${process.env.PUBLIC_URL}/images/svgs/${game.teams.away.team.id}.svg`}/>
                            <h3>{game.teams.away.team.name.split(" ").pop()}</h3>
                        </div>
                        
                        <h1 className="lastgames__score">{game.teams.away.score}</h1>
                    </div>
                    
                    <div className="lastgames__team" style={{
                        color: game.teams.home.score < game.teams.away.score && "#808080"
                    }}>
                        <div className="lastgames__teamInfo">
                            <img src={`${process.env.PUBLIC_URL}/images/svgs/${game.teams.home.team.id}.svg`}/>
                            <h3>{game.teams.home.team.name.split(" ").pop()}</h3>
                        </div>
                        
                        <h1 className="lastgames__score">{game.teams.home.score}</h1>
                    </div>
                </div>
                
                <div className="lastgames__date">
                    {format(new Date(game.gameDate), "LLL do")}
                </div>
            </div>

            <div id="line-break"/>
        </>
    );
}
 
export default LastGameRow;