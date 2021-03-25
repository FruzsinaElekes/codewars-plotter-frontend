import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userAuth/UserContext';
import styled from 'styled-components'
import Menu from './Menu'
import KataList from './KataList'

export default function KataFinder() {
    
    const userSummary = useContext(UserContext)[0]
    const [userCompleted, setUserCompleted] = useContext(UserContext).slice(4,6)
    const [filtered, setFiltered] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(0)

    useEffect(() => {
        if (userCompleted.length === 0) fetchAllKatas()
    }, [])

    const fetchAllKatas = () => {
        const url = `http://localhost:8080/users/${userSummary.username}/katas`
        axios.get(url)
            .then(response => {
                setUserCompleted(response.data)
                setFiltered(response.data)
                setIsLoading(false)
            })
            .catch(error => alert("Username does not exist"))
    }

    return (
        <FinderContainer>
            <Menu isLoading={isLoading} filteredLength={filtered.length} setFiltered={setFiltered} setPage={setPage}></Menu>
            <KataList filtered={filtered} page={page} setPage={setPage}/>
            <PlaceHolder />
        </FinderContainer>

    )
}

const FinderContainer = styled.div`
    display:flex;
    margin: 4em auto;
`

const PlaceHolder = styled.div`
    width: 20%
`