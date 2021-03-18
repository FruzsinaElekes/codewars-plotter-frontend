import React, { useContext } from 'react';
import PlotSection from './PlotSection';
import UserOverview from './UserOverview';
import {UserContext} from '../userAuth/UserContext'

export default function Stats() {

    const user = useContext(UserContext)[0]


    return (
        <React.Fragment>
            {user !== {}
            ? <div>
                <UserOverview userSummary={user}/>
                <PlotSection languages={(user.languageRanks).map(lr => lr.language)}/>
            </div>
            : <div>Loading data</div>
            }
        </React.Fragment>
    )
}
