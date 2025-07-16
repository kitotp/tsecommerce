import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';


interface CartElementProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}

const CartElement = ({ isOpen, onClose, children }: CartElementProps) => {

    const cart = useSelector((store: RootState) => store.cart.cart)

    return (
        <>
            {/* bg shadow */}
            <div onClick={onClose} className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />

            {/* slide side-bar */}
            <div className={`fixed top-0 right-0 w-80 transform transition-transform duration-300 h-full bg-white ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-row h-[45px] justify-between p-5 border-b border items-center '>
                    <p>Your cart</p>
                    <button onClick={() => onClose()}>&times;</button>
                </div>
                <div className='flex flex-col'>
                    {
                        cart.map(item => <div>{item.name}</div>)
                    }
                </div>
            </div>
        </>
    )
}

export default CartElement