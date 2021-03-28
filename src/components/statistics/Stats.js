import React, { useContext } from 'react';
import PlotSection from './PlotSection';
import UserOverview from './UserOverview';
import {UserContext} from '../userAuth/UserContext'
import { Redirect } from 'react-router';
import styled from 'styled-components'

export default function Stats() {

    const user = useContext(UserContext)[0]
    const [userPlots, setUserPlots] = useContext(UserContext).slice(2,4)

    const loadedLanguages = () => {
        return userPlots.map(plot => plot.language)
    }

    return (
        <React.Fragment>
            {Object.keys(user).length > 0
            ? <StatsContainer>
                <UserOverview loadedLanguages={loadedLanguages()} userSummary={user}/>
                <PlotSection 
                    userPlots={userPlots} 
                    setUserPlots={setUserPlots}
                    languages={(user.languageRanks).map(lr => lr.language)}/>
            </StatsContainer>
            : <Redirect to='/'></Redirect>
            }
        </React.Fragment>
    )
}

const StatsContainer = styled.div`
    display: flex;
    position: relative;
    top: 50px;
    height: 100%
`