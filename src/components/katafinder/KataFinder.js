import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userAuth/UserContext';
import KataDescription from './KataDescription';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { byLanguages, byRank } from '../../util/filters'
import FilterPanel from './FilterPanel'

export default function KataFinder() {
    const filters = [byLanguages, byRank]
    const userSummary = useContext(UserContext)[0]
    const [userCompleted, setUserCompleted] = useContext(UserContext).slice(4,6)
    const [filtered, setFiltered] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [filterState, setFilterState] = useState({"rank": [], "languages": []})

    const languageOptions = userSummary.languageRanks.map(r => r.language)
    const rankOptions = ["1 kyu", "2 kyu", "3 kyu", "4 kyu", "5 kyu", "6 kyu", "7 kyu", "8 kyu"]
    const handleFilterChange = (event) => setFilterState(prev => ({ ...prev, [event.target.name]: event.target.value}))
    const resetFilterState = () => setFilterState({"rank": [], "languages": []})
    const deleteFilter = (which) => setFilterState(prev => ({...prev, [which]: []}))

    useEffect(() => {
        if (userCompleted.length === 0) fetchAllKatas()
    }, [])

    useEffect(() => {
        let filteredList = userCompleted.filter(kata => filters.every(f => f(kata, filterState)))
        setFiltered(filteredList)
    }, [filterState])

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
            <FilterMenu>
                <FilterPanel type="languages" 
                            opts ={languageOptions} 
                            filterState={filterState} 
                            filterChange={handleFilterChange}
                            deleteFilter={deleteFilter}
                            multiple="true"></FilterPanel>
                <FilterPanel type="rank" 
                            opts ={rankOptions} 
                            filterState={filterState} 
                            filterChange={handleFilterChange}
                            deleteFilter={deleteFilter}
                            multiple="false"></FilterPanel>
                <Button onClick={resetFilterState}>Reset all</Button>
                <p>Number of items found: {isLoading ? "loading data" : filtered.length}</p>
            </FilterMenu>
            <KataList>
                {filtered.length !== 0
                ? filtered.map(k => <KataDescription key={k.codewarsId} kata = {k}/>)    
                : <p></p>
            }
            </KataList>
        </FinderContainer>

    )
}

const FinderContainer = styled.div`
    display:flex;
    margin: 4em auto;
`
const FilterMenu = styled.div`
    padding-left: 2em;
    width: 20%;
    display: flex;
    flex-direction: column;
`

const KataList = styled.div`
    width: 100%
`