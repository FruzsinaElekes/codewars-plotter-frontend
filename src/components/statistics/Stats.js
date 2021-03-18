import React, { useContext } from 'react';
import PlotSection from './PlotSection';
import UserOverview from './UserOverview';
import {UserContext} from '../userAuth/UserContext'
import { Redirect } from 'react-router';

export default function Stats() {

    const user = useContext(UserContext)[0]


    return (
        <React.Fragment>
            {Object.keys(user).length > 0
            ? <div>
                <UserOverview userSummary={user}/>
                <PlotSection languages={(user.languageRanks).map(lr => lr.language)}/>
            </div>
            : <Redirect to='/'></Redirect>
            }
        </React.Fragment>
    )
}
