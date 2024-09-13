import React from 'react'
import Sidebar from './SideBar.js'
import { Outlet } from 'react-router-dom'

function Body() {
    return (
        <div className='flex'>
            <Sidebar className=""/>
            <Outlet/>
        </div>
    )
}

export default Body
