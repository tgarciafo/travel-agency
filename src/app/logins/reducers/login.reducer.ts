import { createReducer, on } from '@ngrx/store';
import { Credentials } from '../models/credentials';
import { User } from '../../Models/user';
import { login, logout } from '../actions/login.actions';
import { loginError, loginSuccess} from '../actions/auth.actions';

export interface LoginState{
    credentials: Credentials | null;
    loading: boolean;
    loggedIn: boolean;
    error: any;
}

export const initialState: LoginState = {
    credentials: null,
    loading: false,
    loggedIn: false,
    error: null,
};

const _loginReducer = createReducer(
    initialState,
    on(login, (state) => ({
        ...state,
        loading: true,
    })),
    on(loginSuccess, (state) => ({
        ...state,
        loggedIn: true,
        loading: false,
        error: null
    })),
    on(loginError, (state, { payload }) => ({
        ...state,
        loggedIn: false,
        loading: false,
        error: payload
    }))/* ,
    on(logout, () => ({
        loggedIn: false,
        loading: true,
        error: null
    })) */

)

export function loginReducer(state, action) {
    return _loginReducer(state, action);
}