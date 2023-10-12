import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user.phone = action.payload;
    },
    logout: (state) => {
      state.user.phone = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
