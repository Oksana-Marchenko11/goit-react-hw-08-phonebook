import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user: { name: null, email: null },
    token: null,
    isRefreshing: false,
    error: false,
    wrongAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuthError: {
            reducer(state) {
                state.wrongAuth = false;
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;

            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;

            })
            .addCase(logOut.fulfilled, state => {
                state.isLoading = false;
                state.isLoading = false;
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                state.error = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.user = action.payload;
            })
            .addMatcher(
                isAnyOf(register.pending, logIn.pending, refreshUser.pending, logOut.pending),
                state => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(register.rejected, logIn.rejected, refreshUser.rejected, logOut.rejected),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                    state.wrongAuth = true;
                }
            )
    },
});
export const { resetAuthError } = authSlice.actions;
export const authReducer = authSlice.reducer;
