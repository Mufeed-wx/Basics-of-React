import React from 'react'
import Child from './child'
import homeCss from './home.module.css'
import LoggedIn from './loggedIn'
import NotLogged from './notLogged'

const home = ({ status }) => {
    return (
        <div>
            {status ? <LoggedIn /> : <NotLogged/>}
        </div>
    )
}

export default home