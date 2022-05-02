import { useEffect, useState } from "react";
import { format, addDays, differenceInDays } from 'date-fns';

const UpcomingGames = ({ convertGameDate }) => {
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
    
    const getCurrentDay = () => { return format(new Date(), 'yyyy-MM-dd'); }

    const getNextDay = () => { return format(addDays(new Date(), 1), 'yyyy-MM-dd'); }
    
    return(
        <div className="upcoming">
            {upcomingGames.map((game) => 
                <div className="upcoming__games">
                    <p>{convertGameDate(game.gameDate)}</p>
                    <p>{game.teams.away.team.name}</p>
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${game.teams.away.team.id}.svg`}/>
                    <p>at</p>
                    <img src={`${process.env.PUBLIC_URL}/images/svgs/${game.teams.home.team.id}.svg`}/>
                    <p>{game.teams.home.team.name}</p>
                </div>
            )}
        </div>
    )
}

export default UpcomingGames;