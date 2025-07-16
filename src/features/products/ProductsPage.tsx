import React from 'react'
import { productsQuery } from '../../api/queries/productsQuery'
import { useQuery } from '@tanstack/react-query'

const ProductsPage = () => {

    const { data, error } = useQuery(productsQuery)
    console.log(data)

    return (
        <div>ProductsPage</div>
    )
}

export default ProductsPage