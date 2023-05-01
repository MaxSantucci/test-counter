import {RootState} from "../store";

export const selectCounterSettings = (state: RootState) => state.counterSettings.value
export const selectCounterSettingsStart = (state: RootState) => state.counterSettings.value.StartValue