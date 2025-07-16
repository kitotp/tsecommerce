import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <div className='flex flex-row items-center justify-between gap-10 bg-yellow-200 p-3'>
            <div>
                <h1>Exclusive</h1>
            </div>

            <div className='flex flex-row gap-9'>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Contact</Link>
                <Link to='/cart'>About</Link>
                <Link to='/cart'>Sign up</Link>
            </div>
            <div className='flex flex-row items-center justify-center gap-3'>
                <input placeholder='What are you looking for?' className='bg-[#F5F5F5] p-2'></input>
                <img src='/cart_icon.svg'></img>
            </div>
        </div>
    )
}

export default Header