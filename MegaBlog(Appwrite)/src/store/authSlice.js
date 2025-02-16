import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status :false,
    userData : null
}

const authSlice = createSlice({
    name :"auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;

// payload = an optional property of an action object that carries additional data related to the action. 
// It is a way to pass data from the action creator to the reducer, allowing the reducer to perform specific tasks