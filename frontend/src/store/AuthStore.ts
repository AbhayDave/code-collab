import { create } from 'zustand';

interface User {
  login: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  accessToken: localStorage.getItem("accessToken"),
  login: (userData, token) => {
    set({ user: userData, accessToken: token });
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("accessToken", token);
  },
  logout: () => {
    set({ user: null, accessToken: null });
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  },
}));

export default useAuthStore;