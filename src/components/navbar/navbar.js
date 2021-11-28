import React from 'react'
import navData from "../../data/data.json"
import "./navbar.css"

function navbar() {
    return (
        <div>
            <nav className="navbar">

            <h1 className="logo">SHRINKIO</h1>
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="" className="nav-link">{navData.Navigation.home}</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">{navData.Navigation.services}</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">{navData.Navigation.about}</a>
                </li>

                <button>{navData.Navigation.login}</button>

            </ul>
            </nav>
        </div>
    )
}

export default navbar
