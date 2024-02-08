export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectUser = state => state.auth.user;
export const selectUserName = state => state.auth.user.name;
export const selectAuthToken = state => state.auth.token;
export const selectAuthIsRefreshing = state => state.auth.isRefreshing;
export const selectAuthError = state => state.auth.error;
export const selectNewAuthError = state => state.auth.wrongAuth;