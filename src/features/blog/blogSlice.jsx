import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogService from "./blogService";

export const getBlogs = createAsyncThunk(
  "blog/get-blogs",
  async (thunkAPI) => {
    try {
      return await BlogService.getBlogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);  

const initialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState :initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state,action) => {
        state.isLoading = false
          state.isError = false
          state.isSuccess = true
          state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state,action) => {
        state.isError = true
        state.isSuccess = false
        state.isLoading = false
        state.message = action.error;

      });
  },
});

export default blogSlice.reducer;
