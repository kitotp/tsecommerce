import React, { useState } from 'react'
import supabase from '../../supabaseClient'
import { useDispatch } from 'react-redux'
import { addUser } from '../../app/slices/userSlice'

const SignupPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    async function handleLogin() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })


        if (error) throw error

        dispatch(addUser(data.user.email))
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='w-[350px] gap-3 flex flex-col justify-start items-center p-3 h-[500px] border border-black mt-2'>
                <h1>Login form</h1>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-between items-center gap-2'>
                        <p>Email: </p>
                        <input placeholder='Your email...' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-black'></input>
                    </div>
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <p>Password: </p>
                        <input placeholder='Your username...' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-black'></input>
                    </div>
                </div>
                <button className='border border-black p-2' onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default SignupPage