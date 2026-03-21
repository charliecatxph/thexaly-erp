import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface AuthState {
    isAuthenticated: boolean
    user: any | null
}

// Define the initial state using that type
const initialState: AuthState = {
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        login: state => {
            state.isAuthenticated = true
        },
        logout: state => {
            state.isAuthenticated = false
            state.user = null
        },
    }
})

export const { login, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer