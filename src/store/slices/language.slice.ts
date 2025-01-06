import { englishData } from '../../assets/data/englishData'
import { russianData } from '../../assets/data/russianData'

import { createSlice } from '@reduxjs/toolkit'

export interface LanguageState {
    isRussian: boolean
    data: typeof englishData
}

const initialState: LanguageState = {
    isRussian: false,
    data: englishData
}

export const languageSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        toggleLanguage(state) {
            state.isRussian = !state.isRussian
            if (state.isRussian) state.data = russianData
            else state.data = englishData
        },
    },
})

export const { actions, reducer } = languageSlice

export default languageSlice.reducer