import {createSlice} from "@reduxjs/toolkit";

export type CounterTypeState = {
    count: number
    error: string
    buttonClicked: boolean
}

const initialState: CounterTypeState = {
    count: 0,
    error: '',
    buttonClicked: true,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCount: (state, action) => {
            state.count = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        buttonClicked: (state, action) => {
            state.buttonClicked = action.payload
        },
        // input: (state, action) => {
        //     state.input = action.payload
        // }
    }
})

export const {setCount, setError, buttonClicked} = counterSlice.actions

export default counterSlice.reducer