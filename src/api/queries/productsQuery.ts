import { queryOptions } from "@tanstack/react-query";
import supabase from "../../supabaseClient";

export type Product = {
    id: number,
    name: string,
    description: string,
    image: string,
    price: number,
    quantity: number
}

export const fetchProducts = async (): Promise<Product[]> => {
    const { data, error } = await supabase
        .from('products')
        .select('*')

    if (error) throw error
    return data ?? []
}

export async function fetchProductById(id: number): Promise<Product> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()

    if (error) throw error
    return data
}

export const productsQuery = queryOptions({
    queryKey: ['products'],
    queryFn: fetchProducts
})

export const productQuery = (id: number) => queryOptions({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
});