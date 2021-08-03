import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleLeague from '../SingleLeague/SingleLeague';

const LeagueDetails = () => {
        const {id} = useParams();
        const [league, setLeague] = useState([]);

        // console.log(id)
        useEffect(()=>{
            const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
            fetch(url)
            .then(res => res.json())
            .then( data =>setLeague(data.leagues))
        },[])

    return (
        <div>
            {
                league.map ( lg => <SingleLeague league={lg}></SingleLeague>)
            }

            
        </div>
    );
};

export default LeagueDetails;