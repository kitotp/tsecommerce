import React from 'react'
import { useSelector } from 'react-redux'
import { useLoaderData, useParams } from 'react-router-dom'
import { queryClient } from '../../queryClient'
import { fetchProductById, productQuery, productsQuery, type Product } from '../../api/queries/productsQuery'
import { useQuery } from '@tanstack/react-query'

const ProductPage = () => {

    const { id } = useParams<{ id: string }>()
    const productId = Number(id)


    let cachedList = queryClient.getQueryData<Product[]>(productsQuery.queryKey)

    const { data: products, isLoading: listLoading } = useQuery({
        ...productsQuery,
        enabled: !cachedList,
        initialData: cachedList,
        staleTime: 1000 * 60,
    });

    const { data: product, isLoading: productLoading } = useQuery({
        queryKey: productQuery(productId).queryKey,
        queryFn: productQuery(productId).queryFn,
        enabled: !products?.some(p => p.id === productId),
        initialData: () => products?.find(p => p.id === productId)
    })

    console.log(product)

    if (listLoading || productLoading) {
        <div>Is loading...</div>
    }



    return (
        <div className='flex border items-center border-black flex-col w-[300px] h-[500px]'>
            {product?.name}
            <img src={product?.image}></img>
        </div>
    )
}

export default ProductPage