import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <ul className='flex px-0 pt-6 pb-4 m-0 gap-x-2'>
                    <li className='h-auto p-0 m-0'><Link to="/todo" className='p-4 text-blue-800 bg-blue-200 rounded'>Todo App</Link></li>
                    <li className='h-auto p-0 m-0'><Link to="/login" className='p-4 text-blue-800 bg-blue-200 rounded'> Login</Link></li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default RootLayout