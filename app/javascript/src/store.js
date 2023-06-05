import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { greetingsApi } from './api/greetingsdata';

const store = configureStore({
    reducer: {
        [greetingsApi.reducerPath]: greetingsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(greetingsApi.middleware)
})

setupListeners(store.dispatch);

export default store;