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

        if (differenceInDays(gameDate, currentDate) < 1) {
            return `Today ${format(gameDate, 'h:mma')}`
        } 
        else if (differenceInDays(gameDate, currentDate) === 1) {
            return `Tommorow ${format(gameDate, 'h:mma')}`
        }
        return format(gameDate, 'M/dd h:mma')
    }
    
    return(
        <div className="upcoming">
            {upcomingGames.map((game) => 
                <div key={game.gamePk} className="upcoming__game">
                    <div className="upcoming__away">
                        <img src={`${process.env.PUBLIC_URL}/images/svgs/${game.teams.away.team.id}.svg`}/>
                        {game.teams.away.team.name.split(" ").splice(-1)}
                    </div>
                    
                    <div className="upcoming__home">
                        <img src={`${process.env.PUBLIC_URL}/images/svgs/${game.teams.home.team.id}.svg`}/>
                        {game.teams.home.team.name.split(" ").splice(-1)}
                    </div>


                    <div id="upcoming__date">{formatUpcomingDate(game.gameDate)}</div>
                </div>
            )}
        </div>
    )
}

export default UpcomingGames;