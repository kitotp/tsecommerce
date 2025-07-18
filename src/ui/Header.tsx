import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartElement from './CartElement'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import { logoutUser } from '../app/slices/userSlice'



const Header = () => {

    const [isCartOpen, setCartOpen] = useState(false)
    const user = useSelector((store: RootState) => store.user.email)
    const dispatch = useDispatch()

    return (
        <>
            <header className='flex flex-row items-center justify-between gap-10 bg-yellow-200 p-3'>
                <div>
                    <h1>Exclusive</h1>
                </div>

                <div className='flex flex-row gap-9'>
                    <Link to='/'>Home</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                    {!user && <Link to='/signup'>Sign up</Link>}
                    {user && <button onClick={() => dispatch(logoutUser())}>Logout</button>}

                </div>
                <div className='flex flex-row items-center justify-center gap-3'>
                    <input placeholder='What are you looking for?' className='bg-[#F5F5F5] p-2'></input>
                    <img src='/cart_icon.svg' onClick={() => setCartOpen(true)}></img>
                </div>
            </header>

            <CartElement isOpen={isCartOpen} onClose={() => setCartOpen(false)}>
                <p>Пока что здесь пусто.</p>
            </CartElement>
        </>
    )
}

export default Header