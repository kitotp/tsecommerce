import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    email: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUser(state, action) {
            state.email = action.payload.email
            state.id = action.payload.id
        },
        logoutUser(state) {
            state.email = ''
            state.id = null
        }
    }
})

export const { addUser, logoutUser } = userSlice.actions
export default userSlice.reducer