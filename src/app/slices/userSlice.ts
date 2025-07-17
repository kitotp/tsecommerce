import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUser(state, action) {
            state.email = action.payload
        },
        logoutUser(state) {
            state.email = ''
        }
    }
})

export const { addUser, logoutUser } = userSlice.actions
export default userSlice.reducer