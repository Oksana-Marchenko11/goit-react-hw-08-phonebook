import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user: { name: null, email: null },
    token: null,
    isRefreshing: false,
    error: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
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
                }
            )

        // .addCase(refreshUser.pending, state => {
        //     state.isRefreshing = true;
        // })
        // .addCase(refreshUser.fulfilled, (state, action) => {
        //     state.user = action.payload;
        //     state.isLoggedIn = true;
        //     state.isRefreshing = false;
        //     })
        // // .addCase(refreshUser.rejected, state => {
        //     state.isRefreshing = false;
        // });
    },
});

export const authReducer = authSlice.reducer;
