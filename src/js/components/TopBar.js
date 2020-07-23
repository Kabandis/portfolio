import React from "react"
import { NavLink } from "react-router-dom"

const TopBar = () => {
    return (
        <nav className="nav">
            <ul className="nav-container">
                <li>
                    <NavLink
                        to="/"
                        className="nav-link"
                        exact
                    >
                        Головна
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/bio"
                        className="nav-link"
                    >
                        Про мене
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/skills"
                        className="nav-link"
                    >
                        Навики
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className="nav-link"
                    >
                        Роботи
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default TopBar