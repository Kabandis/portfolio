import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import classNames from "classnames"

import Backdrop from "./Backdrop"

const TopBar = () => {
    const [isMenuOpen, setMenuToggle] = useState(false)
    const cls = classNames({
        "nav": true,
        "nav_slide": isMenuOpen
    })
    const close = classNames({
        "hamburger_button": !isMenuOpen,
        "close": isMenuOpen
    })

    return (
        <React.Fragment>
            <nav className={cls}>
                <ul className="nav-container">
                    <li>
                        <NavLink
                            to="/"
                            className="nav-link"
                            exact
                            onClick={() => setMenuToggle(!isMenuOpen)}
                        >
                            Головна
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/bio"
                            className="nav-link"
                            onClick={() => setMenuToggle(!isMenuOpen)}
                            href="#skill"
                        >
                            Про мене
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/skills"
                            className="nav-link"
                            onClick={() => setMenuToggle(!isMenuOpen)}
                        >
                            Навики
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className="nav-link"
                            onClick={() => setMenuToggle(!isMenuOpen)}
                        >
                            Роботи
                        </NavLink>
                    </li>
                </ul>
                <button 
                    className={close}
                    onClick={() => setMenuToggle(!isMenuOpen)}
                >
                </button>
            </nav>
            { isMenuOpen 
                ? <Backdrop onClick={() => setMenuToggle(!isMenuOpen)} /> 
                : null 
            } 
        </React.Fragment>
    )
}

export default TopBar