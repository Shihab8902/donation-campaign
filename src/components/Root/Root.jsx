import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

const Root = () => {
    return <div className='container mx-auto' >
        <Nav />
        <Outlet />
    </div>
}

export default Root