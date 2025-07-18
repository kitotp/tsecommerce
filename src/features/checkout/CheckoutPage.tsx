import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import CheckoutItem from './CheckoutItem'
import supabase from '../../supabaseClient'
import { useNavigate, useParams } from 'react-router-dom'
import { clearCart } from '../../app/slices/cartSlice'

const CheckoutPage = () => {

    const { id } = useParams()
    const cart = useSelector((store: RootState) => store.cart.cart)
    const user_id = useSelector((store: RootState) => store.user.id)
    const dispatch = useDispatch()
    const navigator = useNavigate()

    async function createOrder() {
        const { error } = await supabase
            .from('orders')
            .insert([{ id: id, user_id: user_id, products: cart }])
            .single()

        if (error) throw error
        dispatch(clearCart())
        navigator('/order/successful')
    }

    return (
        <div>
            {cart.map(item => <CheckoutItem item={item} />)}
            <button className='border border-black p-2' onClick={createOrder}>Pay</button>
        </div>
    )
}

export default CheckoutPage