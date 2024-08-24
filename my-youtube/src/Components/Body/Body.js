import React from 'react'
import Sidebar from './SideBar.js'
import MainComponet from './MainComponet'

function Body() {
    return (
        <div className='flex'>
            <Sidebar/>
            <MainComponet/>
        </div>
    )
}

export default Body
