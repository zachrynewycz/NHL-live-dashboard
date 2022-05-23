import { useEffect, useState } from "react";
import { format, subDays } from 'date-fns';

const LastGames = () => {
    const [lastGames, setLastGames] = useState([]);

    useEffect(() => {
        const getUpcomingGames = async () => {
            return fetch(`https://statsapi.web.nhl.com/api/v1/schedule?&startDate=${format(subDays(new Date(), 4), 'yyyy-MM-dd')}&endDate=${format(new Date(), 'yyyy-MM-dd')}`)
            .then(response => response.json())
            .then(({ dates }) => {
                if (dates.length && !lastGames.length) {
                    for (let day in dates) {
                        let data = dates[day].games
                        //getting the individual games 
                        for (let game in data) {
                            setLastGames((lastGames) => [...lastGames, data[game]]);
                        }
                    }
                }
            })
        }
        getUpcomingGames();
    }, [])
    
    return(
        <div className="lastgames">
            {lastGames.filter(game => game.status.abstractGameState !== "Preview" && game.status.abstractGameState !== "Live").map((game) => 
                <div key={game.gamePk} className="lastgames__game">
                    <span className="lastgames__date">{format(new Date(game.gameDate), 'M.dd')}</span>

                    <div className="lastgames__away">
                        <span id="lastgame__team-name">{game.teams.away.team.name.split(" ").pop()}</span>
                        <img src={`${process.env.PUBLIC_URL}/images/svgs/${game.teams.away.team.id}.svg`}/>
                    </div>
                    
                    <span className="lastgames__score">{game.teams.away.score} : {game.teams.home.score}</span>
                    
                    <div className="lastgames__home">
                        <img src={`${process.env.PUBLIC_URL}/images/svgs/${game.teams.home.team.id}.svg`}/>
                        <span id="lastgame__team-name">{game.teams.home.team.name.split(" ").pop()}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LastGames;