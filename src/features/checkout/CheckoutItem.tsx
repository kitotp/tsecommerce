import React from 'react'
import { Product } from '../../api/queries/productsQuery'

type CheckoutItemProps = {
    item: Product
}

const CheckoutItem = ({ item }: CheckoutItemProps) => {
    return (
        <div className='flex flex-row border border-black'>
            <img src={item.image} className='w-[50px] h-[50px]'></img>
            <p>{item.name}</p>
        </div>
    )
}

export default CheckoutItem