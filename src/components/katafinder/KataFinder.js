import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userAuth/UserContext';
import KataDescription from './KataDescription';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export default function KataFinder() {

    const user = useContext(UserContext)[0]
    const [allKatas, setAllKatas] = useState([])
    const [filtered, setFiltered] = useState([])

    const [language, setLanguage] = useState("none")
    const languageOptions = [...user.languageRanks.map(r => r.language), "none"]
    const handleLanguageChange = (event) => setLanguage(event.target.value)

    const [rank, setRank] = useState("none")
    const rankOptions = ["none", "1 kyu", "2 kyu", "3 kyu", "4 kyu", "5 kyu", "6 kyu", "7 kyu", "8 kyu"]
    const handleRankChange = (event) => setRank(event.target.value)

    useEffect(() => {
        fetchAllKatas()
    }, [])

    useEffect(() => {
        let filteredList = allKatas;
        if (language !== "none") filteredList = filteredList.filter(kata => kata.completedLanguages.includes(language))
        if (rank !== "none") filteredList = filteredList.filter(kata => kata.rank === rank)
        setFiltered(filteredList)
    }, [language, rank])

    const fetchAllKatas = () => {
        const url = `http://localhost:8080/users/${user.username}/katas`
        axios.get(url)
            .then(response => {
                setAllKatas(response.data)
                setFiltered(response.data)
            })
            .catch(error => alert("Username does not exist"))
    }

    return (
        <div>
            <div>
                <FormControl>
                    <InputLabel>Language</InputLabel>
                    <Select value={language} onChange={handleLanguageChange}>
                        {languageOptions.map(o => <MenuItem value={o}>{o}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Rank</InputLabel>
                    <Select value={rank} onChange={handleRankChange}>
                        {rankOptions.map(o => <MenuItem value={o}>{o}</MenuItem>)}
                    </Select>
                </FormControl>
            
            </div>
            <div>
                {filtered !== [] 
                ? filtered.map(k => <KataDescription key={k.codewarsId} kata = {k}/>)    
                : "Loading data"
            }
            </div>
        </div>

    )
}
