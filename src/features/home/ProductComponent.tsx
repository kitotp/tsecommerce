import { useDispatch } from 'react-redux'
import type { Product } from '../../api/queries/productsQuery'
import { addToCart } from '../../app/slices/cartSlice'

const ProductComponent = ({ item }: { item: Product }) => {

  const dispatch = useDispatch()


  return (
    <div className='h-[350px] w-[270px] flex flex-col justify-start'>
      <div className='flex items-center justify-center h-[250px] w-full bg-[#F5F5F5]'>
        <img src={item.image}></img>
      </div>
      <p className='text-black mt-[8px] text-[16px] font-semibold'>{item.name.toUpperCase()}</p>
      <div>
        <p className='font-semibold mt-[8px] text-[16px]'>${item.price}</p>
      </div>
      <button className='border border-black p-2' onClick={() => dispatch(addToCart(item))}>Add to cart</button>
    </div>
  )
}

export default ProductComponent