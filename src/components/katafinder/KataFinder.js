import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userAuth/UserContext';
import KataDescription from './KataDescription';

export default function KataFinder() {

    const user = useContext(UserContext)[0]
    const [allKatas, setAllKatas] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        fetchAllKatas()
    }, [])

    const fetchAllKatas = () => {
        const url = `http://localhost:8080/users/${user.username}/katas`
        axios.get(url)
            .then(response => {
                setAllKatas(response.data)
                setFiltered(response.data)
                console.log(response.data)
            })
            .catch(error => alert("Username does not exist"))
    }

    return (
        <div>
            {filtered !== [] 
            ? filtered.map(k => <KataDescription key={k.codewarsId} kata = {k}/>)    
            : "Loading data"
        }
        </div>
    )
}
