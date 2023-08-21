import { combineReducers } from "@reduxjs/toolkit";
import UsersReducer from './Users'
import UserReducer from './User'

export const rootReducer = combineReducers({
    users: UsersReducer,
    user: UserReducer
})