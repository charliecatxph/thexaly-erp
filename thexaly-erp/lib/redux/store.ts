import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './features/authSlice'
import { sphereTreeSlice } from './features/sphereTree'

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer,
            sphereTree: sphereTreeSlice.reducer
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']