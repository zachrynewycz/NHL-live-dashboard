import { useEffect, useState } from "react";
import { format, addDays } from 'date-fns';

const UpcomingGames = () => {
    const [upcomingGames, setUpcomingGames] = useState([]);

    useEffect(() => {
        const getUpcomingGames = async () => {
            return fetch(`https://statsapi.web.nhl.com/api/v1/schedule?&startDate=${getCurrentDay()}&endDate=${getNextDay()}`)
            .then(response => response.json())
            .then(({ dates }) => {
                if (dates.length && !upcomingGames.length) {
                    //check the current and next day for upcoming games
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
    
    const getCurrentDay = () => {
        return format(new Date(), 'yyyy-MM-dd');
    }

    const getNextDay = () => {  
        let date = addDays(new Date(), 1);
        return format(date, 'yyyy-MM-dd');
    }

    const convertGameDate = (start) => {
        let date = new Date(start).toLocaleString();
        let day = new Date().getDate().toString()
        
        //If date is the same day, only display the start time
        if (day === date.slice(2,4)) { 
            //converts to: 9:00 PM
            return `Today ${date.slice(11,15)} ${date.slice(-2)}` 
        }
        //converts to: 4/15
        return `${date.slice(0,4)}`
    }
    
    return(
        <div className="upcoming">
            {upcomingGames.map((game) => 
                <div className="upcoming__games">
                    <p>{convertGameDate(game.gameDate)}</p>
                    <p>{game.teams.away.team.name}</p>
                    <img src={`${process.env.PUBLIC_URL}/images/${game.teams.away.team.id}.png`}/>
                    <p>at</p>
                    <img src={`${process.env.PUBLIC_URL}/images/${game.teams.home.team.id}.png`}/>
                    <p>{game.teams.home.team.name}</p>
                </div>
            )}
        </div>
    )
}

export default UpcomingGames;