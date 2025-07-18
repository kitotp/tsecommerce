import React, { useState } from 'react'
import supabase from '../../supabaseClient'
import { v4 as uuidv4 } from 'uuid'

import { useMutation, useQueryClient } from '@tanstack/react-query'

type NewProduct = {
    name: string,
    description: string,
    price: number,
    image?: string
}

async function createProduct(product: NewProduct) {
    const { data } = await supabase
        .from('products')
        .insert([
            { name: product.name, description: product.description, image: product.image, price: product.price }
        ])
        .select()

    console.log(data)
}


const AdminPage = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState<number | ''>('')
    const [file, setFile] = useState<File | null>(null)

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
        }
    })


    async function handleAdd() {

        let image_url: string | undefined

        if (file) {

            const ext = file.name.split('.').pop()
            const fileName = `${uuidv4()}.${ext}`

            
            //upload image from file to supabase
            const { data: uploadData, error: uploadError } = await supabase
                .storage
                .from('product-images')
                .upload(fileName, file, { cacheControl: '3600', upsert: false })
            console.log('1')
            if (uploadError) throw uploadError


            // public url to image from storage
            const { data: fetchData } = supabase
                .storage
                .from('product-images')
                .getPublicUrl(fileName)

            image_url = fetchData.publicUrl
        }

        mutation.mutate({
            name: name,
            description: description,
            image: image_url,
            price: Number(price)
        })
    }


    return (
        <div className='flex flex-col items-center h-screen'>
            <h1>Add a product</h1>
            <div className='flex flex-col h-[500px] w-[300px] border border-black gap-3 p-3'>
                <div className='flex flex-row justify-between items-center'>
                    <p>Name:</p>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Product name...'></input>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <p>Description:</p>
                    <input placeholder='Product description...' value={description} onChange={(e) => (setDescription(e.target.value))}></input>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <p>Price:</p>
                    <input value={price} onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))} placeholder='Product price...'></input>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <p>Image:</p>
                    <input type='file' onChange={(e) => (setFile(e.target.files?.[0] || null))}></input>
                </div>
                <button className='border border-black p-2' type='button' onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default AdminPage