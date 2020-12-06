import { createReducer, on } from '@ngrx/store';
import { Credentials } from '../models/credentials';
import { login, logout, loginError,loginSuccess } from '../actions/login.actions';

export interface LoginState{
    credentials: Credentials | null;
    loading: boolean;
    loggedIn: boolean;
    error: string | null;
}

export const initialState: LoginState = {
    credentials: null,
    loading: false,
    loggedIn: false,
    error: null,
};

const _loginReducer = createReducer(
    initialState,
    on(login, state => ({
        ...state,
        loading: true,
        loggedIn: false,
        error: null
    })),
    on(loginSuccess, (state, {credentials}) => ({
        ...state,
        loggedIn: true,
        loading: false,
        error: null,
        credentials: credentials
        
    })),
    on(loginError, (state, { payload }) => ({
        ...state,
        loggedIn: false,
        loading: false,
        error: payload
    })),
    on(logout, state => ({
        ...state,
        loggedIn: false,
        loading: false,
        error: null,
        credentials: null
    }))

)

export function loginReducer(state, action) {
    return _loginReducer(state, action);
}