import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandService";

export const getBrands = createAsyncThunk(
  "brands/get-Brands",
  async (thunkAPI) => {
    try {
      return await brandService.getBrands();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  brands: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const brandSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default brandSlice.reducer;
