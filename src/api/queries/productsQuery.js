import { queryOptions } from "@tanstack/react-query";
import supabase from "../../supabaseClient";

export const fetchProducts = async () => {
    const { data } = await supabase
        .from('products')
        .select('*')

    return data
}

export const productsQuery = queryOptions({
    queryKey: ['products'],
    queryFn: fetchProducts
})