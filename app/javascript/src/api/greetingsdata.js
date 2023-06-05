import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const greetingsApi = createApi({
    reducerPath: 'greetingsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getMessage: builder.query({
            query: () => '/random',
            providesTags: ['Messages']
        })
    })
});

export const { useGetMessageQuery } = greetingsApi;