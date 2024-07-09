import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '22b113e7466a46aa6a76ec8f6ff03ea0';

interface WeatherState {
  data: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (location: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default weatherSlice.reducer;