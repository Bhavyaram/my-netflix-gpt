import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            //initial state will be updated
            return action.payload;

        },
        removeUser: (state) => {
            return null;

        },
    }
})


export  const {addUser, removeUser}  = userSlice.actions;
export default userSlice.reducer;