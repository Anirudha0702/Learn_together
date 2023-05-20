import { createSlice } from "@reduxjs/toolkit"

const initState={
    user:JSON.parse(localStorage.getItem("User"))||null,

}
const UserSlice=createSlice({
    name:"userInfo",
    initialState:initState,
    reducers:{
        setUser(state,action){
            console.log(state.user)
            state.user=action.payload;
        }
    }
});
export const {setUser}=UserSlice.actions;
export default UserSlice.reducer;