import React, { useContext } from 'react';
import PlotSection from './PlotSection';
import UserOverview from './UserOverview';
import {UserContext} from '../userAuth/UserContext'
import { Redirect } from 'react-router';
import styled from 'styled-components'

export default function Stats() {

    const user = useContext(UserContext)[0]


    return (
        <React.Fragment>
            {Object.keys(user).length > 0
            ? <StatsContainer>
                <UserOverview userSummary={user}/>
                <PlotSection languages={(user.languageRanks).map(lr => lr.language)}/>
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