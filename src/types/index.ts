export interface User {
    UserNo: number;
    Username: string;
    DefaultBranch: string;
    DefaultCurrency: string;
}

export interface LoginResponse {
    Success: boolean;
    ErrorMessage: string | null;
    ErrorCode: string | null;
    Response: {
        Token: string;
        UserNo: number;
        Username: string;
        DefaultBranch: string;
        DefaultCurrency: string;
    };
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}

export interface AppState {
    isInitialized: boolean;
    isLoading: boolean;
    currentRoute: string;
    tokenExpiration: number | null;
    lastTokenRefresh: number | null;
    error: string | null;
}

export interface LoginCredentials extends FormData {
    append(name: 'UserName', value: string): void;
    append(name: 'Password', value: string): void;
}

export interface UserData {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
}
