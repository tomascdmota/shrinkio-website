import React from 'react'
import navData from "../../data/data.json"
import "./navbar.css"
import Button from "../button/button"

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

            <div className="button">
                <Button/>
            </div>
               

            </ul>
            </nav>
        </div>
    )
}

export default navbar
