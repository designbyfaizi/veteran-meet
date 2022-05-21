import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: null,
  loading: false,
  communityInfo: null,
};

export const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    setCommunity(state, action) {
      state.communityInfo = action.payload;
    },
  },
});

export const { startLoading, stopLoading, setAuthToken, setCommunity } =
  communitySlice.actions;

export default communitySlice.reducer;
