import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlotSection from './PlotSection';
import UserOverview from './UserOverview';
import getCookie from '../util/getCookie';

export default function Stats() {

    const [userSummary, setUserSummary] = useState(0);
    const username = process.env.REACT_APP_USERNAME
    const apiKey = process.env.REACT_APP_APIKEY

    useEffect(() => {
        const url = `http://localhost:8080/user/${username}?apiKey=${apiKey}`
        axios({
            method: 'get',
            url: url,
            headers: {
                'Authorization': `Bearer ${getCookie("jwt")}`
            },
            withCredentials: true
        })
        .then(resp => setUserSummary(resp.data))
    }, [])

    return (
        <React.Fragment>
            {userSummary !== 0
            ? <div>
                <UserOverview userSummary={userSummary}/>
                <PlotSection languages={(userSummary.languageRanks).map(lr => lr.language)}/>
            </div>
            : <div>Loading data</div>
            }
        </React.Fragment>
    )
}
