import React from 'react'
import { useNavigate } from 'react-router-dom'

const CheckoutSuccessful = () => {

    // MAKE THIS PAGE DEPEND ON THE PASSED ID!!

    const navigator = useNavigate()

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='w-[250px] h-[250px] border border-black'>
                <h1>You successfuly made an order</h1>
                <button onClick={() => navigator('/')} className='border border-black p-2'>Back to main menu</button>
            </div>
        </div>
    )
}

export default CheckoutSuccessful