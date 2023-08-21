import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    user: {},
    error: null
}

const user = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        fetchUserRequest(state) {
            state.loading = true;
        },
        fetchUserSuccess(state, action) {
            state.loading = false;
            state.user = action.payload;
        },
        fetchUserFailed(state, action) {
            state.loading = true;
            state.error = action;
        }
    }
})

export const {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailed
} = user.actions;

export default user.reducer;
export const getUser = (state) => state.user

export const fetchUser = (userId) => {
    return async (dispatch) => {
        dispatch(fetchUserRequest())
        try {
            const res = await axios(`https://reqres.in/api/users/${userId}`)
            const data = await res.data.data
            dispatch(fetchUserSuccess(data))
        } catch (err) {
            dispatch(fetchUserRequest(err))
        }
    }
}