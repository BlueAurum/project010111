import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";

interface userState {
  email: string;
  password: string;
}

interface AuthState {
  auth: boolean;
  loading: boolean;
  userInfo: null | userState;
  userToken: null | string;
  error: null | string;
  success: boolean;
}

const initialState: AuthState = {
  auth: false,
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

export const loginUser = createAsyncThunk(
  "authSlice/loginUser",
  async (userInfo: userState) => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const result: userState[] = await response.json();
      const findUser = result.find(
        (user) =>
          user.email === userInfo.email && user.password === userInfo.password
      );
      if (findUser) return findUser;
      else {
        throw Error("такого пользователя нет");
      }
    } catch (error: unknown) {
      return error;
    }
  }
);

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state,action) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(loginUser.fulfilled, (state,action) => {
      state.auth = true
      state.loading = false
      // state.userInfo = action.payload
    })
    builder.addCase(loginUser.rejected, (state,action) => {
      state.auth = false
      state.loading = false
      // state.error = action.error.message
    })
  }
});

export const authState = (state: RootState) => state.auth;
export default authSlice.reducer;
