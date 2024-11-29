import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../models/User"; // Import the User interface
import { API_ENDPOINTS } from "../https";
import { LoginRegister } from "../models/responses/LoginRegister"; // Import the LoginRegister interface

// Define the initial state with TypeScript types
const initialState: {
  user: User | null;
  loading: boolean;
  error: string | null;
} = {
  user: null,
  loading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk<
  User | null,
  { email: string; password: string }
>("user/login", async (userData, { rejectWithValue }) => {
  const response = await fetch(API_ENDPOINTS.LOGIN, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    return rejectWithValue(errorData);
  }

  const data: LoginRegister = await response.json();
  // Save tokens to local storage
  localStorage.setItem("accessToken", data.data.tokens.accessToken);
  localStorage.setItem("refreshToken", data.data.tokens.refreshToken);

  return data.data.user;
});

// Async thunk for register
export const registerUser = createAsyncThunk<User, User>(
  "user/register",
  async (userData, { rejectWithValue }) => {
    const response = await fetch(API_ENDPOINTS.REGISTER, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData); // Reject with error data
    }

    const data: LoginRegister = await response.json();
    // Save tokens to local storage
    localStorage.setItem("accessToken", data.data.tokens.accessToken);
    localStorage.setItem("refreshToken", data.data.tokens.refreshToken);

    return data.data.user;
  }
);

// Async thunk for logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      // Assuming you have an API endpoint for logout
      const body = {
        refreshToken: localStorage.getItem("refreshToken"),
      };
      const response = await fetch(API_ENDPOINTS.LOGOUT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log("response logout", response);

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      // Clear tokens from local storage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      // Clear user data from state
      dispatch(resetUserState());
      return {}; // Return an empty object or any necessary data
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for refreshing user data
export const refreshUserData = createAsyncThunk<User | null, string>(
  "user/refresh",
  // @ts-ignore
  async (userId, { rejectWithValue }) => {
    const response = await fetch(API_ENDPOINTS.USER(userId), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Include token if needed
      },
    });

    if (!response.ok) {
      console.log("response ", response);
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const data: LoginRegister = await response.json();
    console.log("data refresh user", data);
    return data.data;
  }
);

// Selector to check if user is logged in
export const selectIsLoggedIn = (state: { user: { user: User | null } }) =>
  !!state.user.user;
// Get all data of user
export const selectUserData = (state: { user: { user: User | null } }) =>
  state.user.user;

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Adjust based on your API response
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(refreshUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshUserData.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action payload", action.payload);
        state.user = action.payload; // Update user data with refreshed data
      })
      .addCase(refreshUserData.rejected, (state, action) => {
        state.loading = false;
        console.log("action error", action.error);
        state.error = action.error.message ?? null;
      });
  },
});

// Export actions and reducer
export const { resetUserState } = userSlice.actions; // Export the reset action
export default userSlice.reducer;
