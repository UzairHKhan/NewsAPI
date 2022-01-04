import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FullURL } from "../../helpers/API/api";

export const getData = createAsyncThunk("News/getData", async (data) => {
  const res = await FullURL(data);
  return res.json();
});

const News = createSlice({
  name: "News",
  initialState: {
    data: {},
    status: null,
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.status = "Loading";
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.data = {...payload};
      state.status = "success";
    },
    [getData.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default News;
