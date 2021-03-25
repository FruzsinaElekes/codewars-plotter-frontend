import React, { useContext, useState, useEffect } from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SelectPanel from './SelectPanel'
import styled from 'styled-components'
import { UserContext } from '../userAuth/UserContext';
import { byLanguages, byRank, byTitle } from '../../util/filters'
import { FaRegTimesCircle } from 'react-icons/fa';



export default function Menu({isLoading, filteredLength, setFiltered}) {

    const userSummary = useContext(UserContext)[0]
    const userCompleted = useContext(UserContext)[4]
    const [filterState, setFilterState] = useState({"rank": [], "languages": [], "title": []})

    const languageOptions = userSummary.languageRanks.map(r => r.language)
    const rankOptions = ["1 kyu", "2 kyu", "3 kyu", "4 kyu", "5 kyu", "6 kyu", "7 kyu", "8 kyu"]
    const filters = [byLanguages, byRank, byTitle]
    
    const handleFilterChange = (event) => setFilterState(prev => ({ ...prev, [event.target.name]: event.target.value}))
    const handleTitleFilterChange = (event) => setFilterState(prev => ({ ...prev, "title": event.target.value}))
    const resetFilterState = () => setFilterState({"rank": [], "languages": [], "title": []})
    const deleteFilter = (which) => setFilterState(prev => ({...prev, [which]: []}))

    useEffect(() => {
        let filteredList = userCompleted.filter(kata => filters.every(f => f(kata, filterState)))
        setFiltered(filteredList)
    }, [filterState])

    return (
        <FilterMenu>
                <Panel>
                    <TextField label="title" value={filterState.title} onChange={handleTitleFilterChange} />
                    <DelIcon onClick={() => deleteFilter("title")}></DelIcon>
                </Panel>
                <SelectPanel type="languages" 
                            opts ={languageOptions} 
                            filterState={filterState} 
                            filterChange={handleFilterChange}
                            deleteFilter={deleteFilter}
                            multiple="true"></SelectPanel>
                <SelectPanel type="rank" 
                            opts ={rankOptions} 
                            filterState={filterState} 
                            filterChange={handleFilterChange}
                            deleteFilter={deleteFilter}
                            multiple="false"></SelectPanel>
                <Button onClick={resetFilterState}>Reset all</Button>
                <p>Number of items found: {isLoading ? "loading data" : filteredLength}</p>
            </FilterMenu>
    )
}


const FilterMenu = styled.div`
    padding-left: 2em;
    width: 20%;
    display: flex;
    flex-direction: column;
`

const DelIcon = styled(FaRegTimesCircle)`
    margin-left: 1em;
    cursor: pointer;
`
const Panel = styled.div`
    width: 100%;
    display: flex;
    align-items: baseline
`