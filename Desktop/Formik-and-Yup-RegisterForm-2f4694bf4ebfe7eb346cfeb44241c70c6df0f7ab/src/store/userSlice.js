import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const userSlice = createSlice({
    name:'user',
    initialState:{
        myUser:{}
    },
    reducers:{
        logeddUserAction: (state,action) => {
            console.log(action.payload);
            state.myUser = action.payload
            localStorage.setItem('redux_user',JSON.stringify(action.payload))
        },
        restoreUserAction:(state,action) => {
            console.log(action.payload);
            state.myUser=action.payload
        },
        logOutUserAction:(state,action) => {
            state.myUser={};
            localStorage.removeItem('redux_user')
        }
    }
})

export const {logeddUserAction,restoreUserAction,logOutUserAction} = userSlice.actions
export default userSlice.reducer