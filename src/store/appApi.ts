import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, routes } from '../utils/routes';

const AppApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as any;
            const token = state.app?.token;
            if (token) headers.set('Authorization', `Bearer ${token}`);
            headers.set('Accept', 'application/json');
            return headers;
        },
    }),

    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: routes.auth.login,
                method: 'POST',
                body: credentials,
            }),
        }),
        getUser: builder.query({
            query: () => ({
                url: routes.users.getUser,
                method: 'GET',
            }),
        }),
        getUsersGroup: builder.query({
            query: () => ({
                url: routes.users.usersGroup,
                method: 'GET',
            }),
        }),
        getBranches: builder.query({
            query: () => ({
                url: routes.users.branches,
                method: 'GET',
            }),
        }),
    }),
});

export const { useLoginMutation, useGetUserQuery, useGetUsersGroupQuery, useGetBranchesQuery } = AppApi;
export { AppApi };