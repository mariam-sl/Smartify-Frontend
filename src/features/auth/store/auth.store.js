import { create } from "zustand";

import { loginUser, getCurrentUser } from "../services/authService";

import { getAccessToken,setTokens,clearTokens,isTokenExpired,} from "../services/tokenService";

export const useAuthStore = create((set) => ({
   // State
  user: null,
  isAuthenticated: false,
  isInitializing: true,

  // Initialize authentication
  initialize: async () => {
    const token = getAccessToken();

    // No token
    if (!token) {
      set({
        user: null,
        isAuthenticated: false,
        isInitializing: true,
      });

      return;
    }

    // Expired token
    if (isTokenExpired(token)) {
      clearTokens();
      set({
        user: null,
        isAuthenticated: false,
        isInitializing: false,
      });

      return;
    }

    try {
      const user = await getCurrentUser();
      set({
        user,
        isAuthenticated: true,
        isInitializing: false,
      });
    } catch (error) {
      clearTokens();
      set({
        user: null,
        isAuthenticated: false,
        isInitializing: false,
      });
    }
  },

 
  // Login
  login: async (credentials) => {
    const { accessToken, refreshToken } = await loginUser(credentials);

    // Save tokens first
    setTokens({
      accessToken,
      refreshToken, 
   });

    // Now token exists
    // so /users/me can work
    const user = await getCurrentUser();
    set({
      user,
      isAuthenticated: true,
      isInitializing: false,
    });

    return user;
  },

  
  // Logout
  logout: () => {
    clearTokens();
    set({
      user: null,
      isAuthenticated: false,
    });
  },


  // Helpers
  setUser: (user) => {
    set({
      user,
      isAuthenticated: true,
    });
  },

  clearUser: () => {
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));
