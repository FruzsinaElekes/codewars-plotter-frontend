import React from 'react'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { FaRegTimesCircle } from 'react-icons/fa';


export default function SelectPanel(props) {
    const {type, opts, filterState, filterChange, deleteFilter, multi} = props

    return (
        <Panel>
            <FormControl style={{ 'width': '100%'}}>
                <InputLabel id={type}>{type}</InputLabel>
                <Select 
                    name={type} 
                    labelId={type}
                    multiple={multi} 
                    value={filterState[type]} 
                    onChange={filterChange}>
                        {opts.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
                </Select>
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