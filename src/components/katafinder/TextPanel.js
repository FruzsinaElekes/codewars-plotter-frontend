import React from 'react';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { FaRegTimesCircle } from 'react-icons/fa'
import styled from 'styled-components'

export default function TextPanel({ filterState, handleTitleFilterChange, deleteFilter, type}) {
    return (
        <Panel>
            <FormControl style={{ 'width': '100%', background: "gray", paddingLeft: "0.5em", color: "black"}}>
                <TextField 
                    label={type}
                    value={filterState.title} 
                    onChange={handleTitleFilterChange} />
                </FormControl>
            <DelIcon onClick={() => deleteFilter("title")}></DelIcon>
        </Panel>
    )
}

const DelIcon = styled(FaRegTimesCircle)`
    margin-left: 1em;
    cursor: pointer;
`
const Panel = styled.div`
    width: 100%;
    display: flex;
    align-items: baseline;
`