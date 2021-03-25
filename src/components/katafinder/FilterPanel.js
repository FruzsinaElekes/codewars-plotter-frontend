import React from 'react'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { FaRegTimesCircle } from 'react-icons/fa';


export default function FilterPanel(props) {
    const {type, opts, filterState, filterChange, deleteFilter, multiple} = props

    const selectMultiple = <Select 
            name={type} 
            multiple="true" 
            value={filterState[type]} 
            onChange={filterChange}>
                {opts.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
            </Select>
    const selectSingle = <Select 
            name={type} 
            value={filterState[type]} 
            onChange={filterChange}>
                {opts.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
            </Select>
    return (
        <Panel>
            <FormControl style={{ 'width': '100%'}}>
                <InputLabel>{type}</InputLabel>
                {multiple === "true" ? selectMultiple : selectSingle}
            </FormControl>
            <DelIcon name={type} onClick={() => deleteFilter(type)} />
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
    align-items: baseline
`