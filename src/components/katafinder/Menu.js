import React, { useContext, useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import SelectPanel from './SelectPanel'
import styled from 'styled-components'
import { UserContext } from '../userAuth/UserContext';
import { byLanguages, byRank, byTitle } from '../../util/filters'
import TextPanel from './TextPanel';



export default function Menu({isLoading, filteredLength, setFiltered, setPage}) {

    const userSummary = useContext(UserContext)[0]
    const userCompleted = useContext(UserContext)[4]
    const [filterState, setFilterState] = useState({"rank": '', "languages": [], "title": []})

    const languageOptions = userSummary.languageRanks.map(r => r.language)
    const rankOptions = ["1 kyu", "2 kyu", "3 kyu", "4 kyu", "5 kyu", "6 kyu", "7 kyu", "8 kyu"]
    const filters = [byLanguages, byRank, byTitle]
    
    const handleFilterChange = (event) => setFilterState(prev => ({ ...prev, [event.target.name]: event.target.value}))
    const handleTitleFilterChange = (event) => setFilterState(prev => ({ ...prev, "title": event.target.value}))
    const resetFilterState = () => setFilterState({"rank": '', "languages": [], "title": []})
    const deleteFilter = (which) => setFilterState(prev => ({...prev, [which]: which === "rank" ? '' : []}))

    useEffect(() => {
        let filteredList = userCompleted.filter(kata => filters.every(f => f(kata, filterState)))
        setFiltered(filteredList)
        setPage(0)
    }, [filterState])

    return (
        <FilterMenu>
            <TextPanel 
                filterState={filterState} 
                handleTitleFilterChange={handleTitleFilterChange} 
                deleteFilter={deleteFilter}
                type="title"></TextPanel>
            <SelectPanel type="languages" 
                        opts ={languageOptions} 
                        filterState={filterState} 
                        filterChange={handleFilterChange}
                        deleteFilter={deleteFilter}
                        multi={true}></SelectPanel>
            <SelectPanel type="rank" 
                        opts ={rankOptions} 
                        filterState={filterState} 
                        filterChange={handleFilterChange}
                        deleteFilter={deleteFilter}
                        multi={false}></SelectPanel>
            <Button style={{ backgroundColor: "#d9392e", width: "50%", margin: "1em auto"}} onClick={resetFilterState}>Reset all</Button>
            <p>Number of items found: {isLoading ? "loading data" : filteredLength}</p>
        </FilterMenu>
    )
}


const FilterMenu = styled.div`
    position: fixed;
    min-height: 100vh;
    color: #f0f0f0;
    background-color: rgb(33, 32, 32);
    padding: 2em 2em;
    width: max(20%, 360px);
    display: flex;
    flex-direction: column;
`
