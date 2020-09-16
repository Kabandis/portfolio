import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "../pages/Home/home"
import Bio from "../pages/Bio/bio"
import Skills from "../pages/Skills/skills"
import Projects from "../pages/Projects/projects"

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