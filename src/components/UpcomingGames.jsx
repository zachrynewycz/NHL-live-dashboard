import { useEffect, useState } from "react";
import { format, addDays, differenceInDays } from 'date-fns';

const UpcomingGames = () => {
    const [upcomingGames, setUpcomingGames] = useState([]);

    useEffect(() => {
        const getUpcomingGames = async () => {
            return fetch(`https://statsapi.web.nhl.com/api/v1/schedule?&startDate=${format(new Date(), 'yyyy-MM-dd')}&endDate=${format(addDays(new Date(), 2), 'yyyy-MM-dd')}`)
            .then(response => response.json())
            .then(({ dates }) => {
                if (dates.length && !upcomingGames.length) {
                    //check the current and upcoming days for games
                    for (let day in dates) {
                        let data = dates[day].games
                        //get the individual games
                        for (let game in data) {
                            setUpcomingGames((upcomingGames) => [...upcomingGames, data[game]]);
                        }
                    }
                }
            })
        }
        getUpcomingGames();
    }, [])


    const formatUpcomingDate = (start) => {
        let currentDate = new Date()
        let gameDate = new Date(start)
        // Checks if game is on current day
        return differenceInDays(gameDate, currentDate) < 1 ? format(gameDate, 'p') : format(gameDate, 'M/d')
    }
    
    return(
        <div className="upcoming">
            {upcomingGames.map((game) => 
                <div className="upcoming__game">
                    <p id="upcoming__date">{formatUpcomingDate(game.gameDate)}</p>

                    <div className="upcoming__away">
                        {game.teams.away.team.name.split(" ").splice(-1)}
                        <img src={`${process.env.PUBLIC_URL}/images/svgs/${game.teams.away.team.id}.svg`}/>
                    </div>
                    
                    <p id="vs">vs</p>
                    
                    <div className="upcoming__home">
                        <img src={`${process.env.PUBLIC_URL}/images/svgs/${game.teams.home.team.id}.svg`}/>
                        {game.teams.home.team.name.split(" ").splice(-1)}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UpcomingGames;