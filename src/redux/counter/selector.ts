import {RootState} from "../store";

export const selectCounter = (state: RootState) => state.counter.count

export const selectError = (state: RootState) => state.counter.error

export const selectButtonClicked = (state: RootState) => state.counter.buttonClicked