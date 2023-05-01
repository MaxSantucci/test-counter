import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CounterSettings = {
    StartValue: number
    MaxValue: number
}

export type CounterType = {
    value: CounterSettings
}

const initialState: CounterType = {
    value: {
        StartValue: 0,
        MaxValue: 5
    }
}

export const counterSettingsSlice = createSlice({
    name: 'counterSettings',
    initialState,
    reducers: {
        counterValue: (state, action: PayloadAction<CounterSettings>) => {
            state.value = action.payload
        }
    }
})

export const {counterValue} = counterSettingsSlice.actions

export default counterSettingsSlice.reducer