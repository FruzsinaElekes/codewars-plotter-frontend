import React from 'react'
import styled from 'styled-components'

export default function PlotMenu({ isCollapsed, setCollapsed, setNotCollapsed }) {
    return (
        <SideBar>
            <p>Select plot type:</p>
            <div>
                <input type="radio" id="per language" name="type" value="per language" defaultChecked={!isCollapsed} onClick={setNotCollapsed}></input>
                <label htmlFor="per language">Per language</label>
            </div>
            <div>
                <input type="radio" id="collapsed" name="type" value="collapsed" defaultChecked={isCollapsed} onClick={setCollapsed}></input>
                <label htmlFor="collapsed">Collapsed</label>
            </div>
        </SideBar>
    )
}


const SideBar = styled.div`
    width: 20%
`