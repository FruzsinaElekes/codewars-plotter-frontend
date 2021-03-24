import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userAuth/UserContext';
import KataDescription from './KataDescription';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import styled from 'styled-components'
import { byLanguage, byRank } from '../../util/filters'

export default function KataFinder() {
    const filters = [byLanguage, byRank]
    const userSummary = useContext(UserContext)[0]
    const [userCompleted, setUserCompleted] = useContext(UserContext).slice(4,6)
    const [filtered, setFiltered] = useState([])

    const [language, setLanguage] = useState("none")
    const languageOptions = [...userSummary.languageRanks.map(r => r.language), "none"]
    const handleLanguageChange = (event) => setLanguage(event.target.value)

    const [rank, setRank] = useState("none")
    const rankOptions = ["none", "1 kyu", "2 kyu", "3 kyu", "4 kyu", "5 kyu", "6 kyu", "7 kyu", "8 kyu"]
    const handleRankChange = (event) => setRank(event.target.value)

    useEffect(() => {
        if (userCompleted.length === 0) fetchAllKatas()
    }, [])

    useEffect(() => {
        const state = {"language": language, "rank": rank}
        let filteredList = userCompleted.filter(kata => filters.every(f => f(kata, state)))
        setFiltered(filteredList)
    }, [language, rank])

    const fetchAllKatas = () => {
        const url = `http://localhost:8080/users/${userSummary.username}/katas`
        axios.get(url)
            .then(response => {
                setUserCompleted(response.data)
                setFiltered(response.data)
            })
            .catch(error => alert("Username does not exist"))
    }

    return (
        <FinderContainer>
            <FilterMenu>
                <FormControl>
                    <InputLabel>Language</InputLabel>
                    <Select value={language} onChange={handleLanguageChange}>
                        {languageOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Rank</InputLabel>
                    <Select value={rank} onChange={handleRankChange}>
                        {rankOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
                    </Select>
                </FormControl>
            
            </FilterMenu>
            <div>
                {filtered.length !== 0
                ? filtered.map(k => <KataDescription key={k.codewarsId} kata = {k}/>)    
                : <p></p>
            }
            </div>
        </FinderContainer>

    )
}

const FinderContainer = styled.div`
    margin: 4em auto;
`
const FilterMenu = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-evenly;
`