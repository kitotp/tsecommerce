import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex flex-row items-center justify-center gap-10 bg-yellow-200 p-3'>
            <Link to='/'>Products</Link>
            <Link to='/cart'>Cart</Link>
        </div>
    )
}

export default Header