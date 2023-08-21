import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    users: [],
    error: null
};


const users = createSlice({
    name: 'UsersSlice',
    initialState,
    reducers: {
        fetchUserRequest(state) {
            return { ...state, loading: true };
        },
        fetchUserSuccess(state, action) {
            return { ...state, loading: false, users: [...state.users, action.payload.data] };
        },
        fetchUserFailed(state, action) {
            return { ...state, loading: false, error: action.payload };
        },
    }

})
export const {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailed
} = users.actions;

export default users.reducer;

export const getAllUsers = (state) => state.users

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUserRequest);
        try {
            const response = await axios('https://reqres.in/api/users?page=1')
            const data = await response.data
            dispatch(fetchUserSuccess(data))
        } catch (e) {
            const err = "Error fetching details..";
            dispatch(fetchUserFailed(err))
        }
    }
}