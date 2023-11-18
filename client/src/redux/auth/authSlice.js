import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../api/auth.service';

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      console.log("mannnnnnnnnnn");
      const res = await authService.login('marshal5','marshal1111');
      console.log("mannnnnnnnnnn",res);

      // localStorage.setItem("user", JSON.stringify(res.data));

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    status:'false',
    user:null,
  },
  reducers: {
    setCredential: (state,action) => {
      const {user} = action/payload
      state.user = user
    },
    logout: (state,action) => {
      state.user = null
      state.token = null
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers:{
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload;
      // state.id = action.payload.user.id;
      // state.token = action.payload.accessToken;
      // state.token = action.payload.refreshToken;

    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      state.err = action.payload?.message;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setCredential, logout, incrementByAmount } = authSlice.actions

export default authSlice.reducer
export const selectCurrentUser = (state)=>state.auth.user