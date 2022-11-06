import create from "zustand";
import { UserState } from "./user";

export const useUserStore = create<UserState>()((set) => ({
    user: null,
    isUserAuthenticated: false,

    authenticateUser: (user: Record<string, string>) => {
        set((state) => ({ ...state, isUserAuthenticated: true }));
    },
    register: (user: Record<string, string>) => {},
}));
