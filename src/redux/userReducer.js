// userReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userData: {
  },
};

const singleUser = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userData = action.payload;
       console.log("User Details dispatched to Redux:", action.payload);
    },
    
    setTokens: (state, action) => {
      state.token = action.payload;
      console.log("token dispatched to Redux:", action.payload);
    },
    logoutUser: (state) => {
      localStorage.removeItem("userAccessToken");
      state.userData = {};
      state.token = "";
    },
  },
});
export const { setUserDetails, logoutUser, setTokens } = singleUser.actions;
export default singleUser.reducer;
