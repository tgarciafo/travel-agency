import { createReducer, on } from '@ngrx/store';
import { User, Education } from '../models/user';
import {
    addEducationError, addEducationSuccess, getUser, getUserError,
    getUserSuccess, registerUser, editUserError, editUserSuccess, registerUserError,
    registerUserSuccess, editUser, addEducation, logoutUser
} from '../actions/profile.actions';

export interface ProfileState{
    user: User;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: ProfileState = {
    user: new User(),
    loading: false,
    loaded: false,
    error: null
};

const _profileReducer = createReducer(
    initialState,
    on(registerUser, state => ({ ...state, loading: true })),
    on(registerUserSuccess, state => ({
        ...state,
        loading: false,
        loaded: true
    })),
    on(registerUserError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(editUser, state => ({ ...state, loading: true })),
    on(editUserSuccess, (state, { id, user }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: user
        })
    ),
    on(editUserError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(addEducation, state => ({ ...state, loading: true })),
    on(addEducationSuccess, (state, { id, user, education }) => ({
        ...state,
        loading: false,
        loaded: false,
       
        }
))
    ,
    on(addEducationError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(getUser, state => ({ ...state, loading: true })),
    on(getUserSuccess, (state, { user } ) => ({
        ...state,
        loading: false,
        loaded: true,
        user: user
    })),
    on(getUserError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(logoutUser, state => ({
        ...state,
        loaded: false,
        loading: false,
        error: null,
        user: null
    }))
)

export function profileReducer(state, action) {
    return _profileReducer(state, action);
}