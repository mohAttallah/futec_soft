import { createSlice } from '@reduxjs/toolkit';
import { AppApi } from '../appApi';
import { TokenManager } from '../../utils/tokenManager';

interface User {
    UserNo: number;
    Username: string;
    DefaultBranch: string;
    DefaultCurrency: string;
}

interface AppState {
    loading: boolean;
    error: string | null;
    user: User | null;
    token: string | null;
    isLoggedIn: boolean;
}

const initialState: AppState = {
    loading: false,
    error: null,
    user: null,
    token: null,
    isLoggedIn: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        resetAppState: (state) => {
            state.loading = false;
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
            TokenManager.clearAll();
        },
        setAuthFromStorage: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isLoggedIn = !!token;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            AppApi.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                console.log('Login successful:', payload);

                if (payload.Success && payload.Response) {
                    const user: User = {
                        UserNo: payload.Response.UserNo,
                        Username: payload.Response.Username,
                        DefaultBranch: payload.Response.DefaultBranch,
                        DefaultCurrency: payload.Response.DefaultCurrency,
                    };
                    state.user = user;
                    state.token = payload.Response.Token;
                    state.isLoggedIn = true;
                    state.error = null;
                    TokenManager.saveToken(payload.Response.Token, user);
                }
            }
        );

        builder.addMatcher(
            AppApi.endpoints.login.matchPending,
            (state) => {
                state.loading = true;
                state.error = null;
            }
        );

        builder.addMatcher(
            AppApi.endpoints.login.matchRejected,
            (state, { error }) => {
                state.loading = false;
                state.error = error.message || 'Login failed';
            }
        );
    }
});

export const checkAndSetAuthFromStorage = () => async (dispatch: any) => {
    const credentials = await TokenManager.getCredentials();

    if (credentials.token && credentials.user) {
        dispatch(setAuthFromStorage({
            user: credentials.user,
            token: credentials.token
        }));
        return true;
    }
    return false;
};

export const { resetAppState, logout, setAuthFromStorage } = appSlice.actions;
export default appSlice.reducer;