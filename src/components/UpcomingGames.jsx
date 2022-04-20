import { useEffect, useState } from "react";
import { format, addDays } from 'date-fns';

const UpcomingGames = () => {
    const [upcomingGames, setUpcomingGames] = useState({});
    
    useEffect(() => {
        // const getUpcomingGames = async () => {
        //     return fetch(`https://statsapi.web.nhl.com/api/v1/schedule?startDate=${getCurrentDay()}?endDate=${getNextDay}`)
        //     .then(response => response.json())
        // }
        // getUpcomingGames();

    }, [])

    const getCurrentDay = () => {
        let date = format(new Date(), 'yyyy-MM-dd');
        return date;
    }

    const getNextDay = () => {  
        let date = addDays(new Date(), 1);
        let formatedDate = format(date, 'yyyy-MM-dd');
        return formatedDate;
    }

    return(
        <div className="upcoming">


        </div>
    )
}

export default UpcomingGames;