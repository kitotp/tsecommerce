import { useDispatch } from 'react-redux'
import type { Product } from '../api/queries/productsQuery'
import { decItem, incItem, removeFromCart } from '../app/slices/cartSlice'


type CartItemProps = {
    item: Product
}

const CartItem = ({ item }: CartItemProps) => {

    const dispatch = useDispatch()

    return (
        <div className='flex justify-between flex-row border border-black m-2 items-center'>
            <div className='flex flex-row items-center'>
                <img src={item.image} className='w-[50px] h-[50px] '></img>
                <h1>{item.name}</h1>
            </div>
            <div className='flex flex-row items-center px-2 gap-2 '>
                <button onClick={() => dispatch(decItem(item.id))}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(incItem(item.id))}>+</button>
                <button className='border border-black' onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
        </div>
    )
}

export default CartItem