import React from 'react'
import {Route} from 'react-router-dom'
import Home from './home'
import Profile from './profile'
const routes=[
    <Route key='home' exact path='/' component={Home}/>,
    <Route key='profile' path='/profile' component={Profile}/>,
]

export default routes
