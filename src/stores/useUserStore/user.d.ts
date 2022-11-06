export type UserState = {
    user: Record<string, string> | null;
    isUserAuthenticated: boolean;
    authenticateUser: (user: Record<string, string>) => void;
    register: (user: Record<string, string>) => void;
};
