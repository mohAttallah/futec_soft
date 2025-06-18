import { configureStore } from '@reduxjs/toolkit';
import { AppApi } from './appApi';
import appSlice from  "./slices/appSlice"
export const store = configureStore({
  reducer: {
    [AppApi.reducerPath]: AppApi.reducer,
    app: appSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AppApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
