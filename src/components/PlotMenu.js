import React from 'react'

export default function PlotMenu({ isCollapsed, setCollapsed, setNotCollapsed }) {
    return (
        <div>
            <p>Select plot type:</p>
            <div>
                <input type="radio" id="per language" name="type" value="per language" defaultChecked={!isCollapsed} onClick={setNotCollapsed}></input>
                <label htmlFor="per language">Per language</label>
            </div>
            <div>
                <input type="radio" id="collapsed" name="type" value="collapsed" defaultChecked={isCollapsed} onClick={setCollapsed}></input>
                <label htmlFor="collapsed">Collapsed</label>
            </div>
        </div>
    )
}
