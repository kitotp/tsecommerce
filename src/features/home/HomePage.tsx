import React from 'react'
import { productsQuery } from '../../api/queries/productsQuery'
import { useQuery } from '@tanstack/react-query'
import ProductComponent from './ProductComponent'

const ProductsPage = () => {

    const { data, error } = useQuery(productsQuery)

    if (error) console.error(error)

    return (
        <div className='flex flex-row gap-5'>
            {data?.map(item => <ProductComponent item={item} />)}
        </div>
    )
}

export default ProductsPage