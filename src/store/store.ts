import { configureStore } from '@reduxjs/toolkit'

import languageSlice from './slices/language.slice'

export const store = configureStore({
    reducer: { languageSlice },
})

export type RootState = ReturnType<typeof store.getState>
