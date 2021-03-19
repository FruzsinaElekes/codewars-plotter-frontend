import React, { useState } from 'react';


export const UserContext = React.createContext();

export const UserProvider = (props) => {
    
    const [userSummary, setUserSummary] = useState({})
    const [userPlots, setUserPlots] = useState([])
    const [userCompleted, setUserCompleted] = useState([])

    return (
        <UserContext.Provider value={[userSummary, setUserSummary, userPlots, setUserPlots, userCompleted, setUserCompleted]}>
            {props.children}
        </UserContext.Provider>
    )
}
