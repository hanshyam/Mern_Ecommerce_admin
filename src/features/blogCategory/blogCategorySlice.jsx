import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogCategoryService from "./blogCategoryService";

export const getBlogCategory = createAsyncThunk(
  "bCategory/get-BCategory",
  async (thunkAPI) => {
    try {
      return await blogCategoryService.getBlogCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  blogCategory: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const blogCategorySlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.blogCategory = action.payload;
      })
      .addCase(getBlogCategory.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default blogCategorySlice.reducer;
