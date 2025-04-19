import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: null,
}
export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        onSigin: (state, action) => {
            state.user = action.payload
        },
        onLogout: (state, action) => {
            state.user = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { onLogout, onSigin } = userSlice.actions

export default userSlice.reducer