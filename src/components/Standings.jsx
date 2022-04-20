import { useEffect, useState } from "react";


const Standings = () => {
    const [standings, setStandings] = useState({});

    // useEffect(() => {
    //     const getStandings = async () => {
    //         return fetch("https://statsapi.web.nhl.com/api/v1/standings")
    //         .then(response => console.log(response.json()))
    //     }
    //     getStandings()
    // }, [])

    return(
        <div className="standings">   
            <div id="standing-header">Team &emsp; W L OTL</div>
            <div id="standing-data"></div>
        </div>
    )
}

export default Standings;