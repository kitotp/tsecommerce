import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import CartItem from './CartItem';


interface CartElementProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}

const CartElement = ({ isOpen, onClose, children }: CartElementProps) => {

    const cart = useSelector((store: RootState) => store.cart.cart)

    const totalPrice = cart.reduce((accum, item) => accum + item.price * item.quantity, 0)

    return (
        <>
            {/* bg shadow */}
            <div onClick={onClose} className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />

            {/* slide side-bar */}
            <div className={`fixed top-0 right-0 w-80 transform flex flex-col transition-transform duration-300 h-full bg-white ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-row h-[45px] justify-between p-5 border-b border items-center '>
                    <p>Your cart</p>
                    <button onClick={() => onClose()}>&times;</button>
                </div>
                {cart.length > 0 &&
                    <>
                        <div className='flex flex-col'>
                            {
                                cart.map(item => <CartItem item={item} />)
                            }
                        </div>

                        <p>Total price: {totalPrice}</p>
                        <button className='self-center border border-black p-2'>Checkout</button>
                    </>
                }
            </div>
        </>
    )
}

export default CartElement