import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "../pages/home/home"
import Bio from "../pages/bio/bio"
import Skills from "../pages/skills/skills"
import Projects from "../pages/projects/projects"

export default () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/bio" component={Bio} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
        </Switch>
    )
}