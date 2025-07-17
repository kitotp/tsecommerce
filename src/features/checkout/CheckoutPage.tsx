import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import CheckoutItem from './CheckoutItem'

const CheckoutPage = () => {

    const cart = useSelector((store: RootState) => store.cart.cart)



    return (
        <div>
            {cart.map(item => <CheckoutItem item={item} />)}
            <button className='border border-black p-2'>Pay</button>
        </div>
    )
}

export default CheckoutPage