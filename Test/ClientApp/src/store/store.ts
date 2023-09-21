import { configureStore } from '@reduxjs/toolkit'
import TreeReducer from './slices/treeSlice';

export const store = configureStore({
    reducer: {
        tree: TreeReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch