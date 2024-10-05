import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productCategoryService from "./productCategoryService";

export const getProductCategory = createAsyncThunk(
  "pCategory/get-PCategory",
  async (thunkAPI) => {
    try {
      return await productCategoryService.getProductCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  productCategory: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productCategorySlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.productCategory = action.payload;
      })
      .addCase(getProductCategory.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default productCategorySlice.reducer;
