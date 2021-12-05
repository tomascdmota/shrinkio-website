import React, { useState } from 'react'
import navData from "../../data/data.json"
import "./button.css"

function button() {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <div>
            <button className="button" onClick={() => setIsClicked(true)} >{navData.Navigation.login}</button>
        </div>
    )
}

export default button
