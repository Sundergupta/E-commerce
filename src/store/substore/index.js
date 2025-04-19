import { createSlice, } from "@reduxjs/toolkit";
const initialState = {
    user: {
        email: '',
        password: ''
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        storeUserData: (state, action) => {

            console.log(action.payload)

        }
    }
})
export const { storeUserData } = userSlice.actions
export default userSlice.reducer