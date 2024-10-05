import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import colorService from "./colorService";

export const getColors = createAsyncThunk(
    "colors/get-colors",
    async(thunkAPI)=>{
         try {
            return await colorService.getColors();
         } catch (error) {
             return  thunkAPI.rejectWithValue(error);

         }
    }
);

const initialState = {
    colors:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
};

const  colorSlice = createSlice({
    name:"colors",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getColors.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getColors.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.colors = action.payload;
        })
        .addCase(getColors.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})

export default colorSlice.reducer;

