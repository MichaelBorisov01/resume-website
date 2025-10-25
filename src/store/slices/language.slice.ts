import { englishData } from '../../assets/data/englishData'
import { russianData } from '../../assets/data/russianData'

import { createSlice } from '@reduxjs/toolkit'

export interface LanguageState {
    isRussian: boolean
    data: typeof russianData
}

const initialState: LanguageState = {
    isRussian: true,
    data: russianData
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        toggleLanguage(state) {
            state.isRussian = !state.isRussian
            if (state.isRussian) state.data = russianData
            else state.data = englishData
        },
    },
})

export const { actions } = languageSlice

export default languageSlice.reducer