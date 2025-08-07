import React from 'react'
import Sidebar from './SideBar.js'
import { Outlet } from 'react-router-dom'

function Body() {
    return (
        <div className='flex flex-col md:flex-row'>
            <Sidebar className="" />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}

export default Body
