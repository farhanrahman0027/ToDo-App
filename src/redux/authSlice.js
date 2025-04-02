// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("auth")) || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("auth", JSON.stringify(true));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("auth", JSON.stringify(false));
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
