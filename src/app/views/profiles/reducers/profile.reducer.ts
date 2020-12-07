import { createReducer, on } from '@ngrx/store';
import { User, Education } from '../models/user';
import {
    addEducationError, addEducationSuccess, getUser, getUserError,
    getUserSuccess, registerUser, updateUserError, updateUserSuccess, registerUserError,
    registerUserSuccess, updateUser, addEducation, logoutUser, addActivity, addActivityError,
    addActivitySuccess, updateActivity, updateActivityError, updateActivitySuccess, deleteActivity,
    deleteActivityError, deleteActivitySuccess, deleteEducation, deleteEducationError, deleteEducationSuccess,
    updateEducation,updateEducationError,updateEducationSuccess
} from '../actions/profile.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

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
    on(updateUser, state => ({ ...state, loading: true })),
    on(updateUserSuccess, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        user: action.user
        })
    ),
    on(updateUserError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(addEducation, state => ({ ...state, loading: true, error: null })),
    on(addEducationSuccess, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: action.user
    }
    )),
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
    on(updateEducation, state => ({ ...state, loading: true, error: null })),
    on(updateEducationSuccess, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: action.user
    }
    )),
    on(updateEducationError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(deleteEducation, state => ({ ...state, loading: true, error: null })),
    on(deleteEducationSuccess, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: action.user
    }
    )),
    on(deleteEducationError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(addActivity, state => ({ ...state, loading: true })),
    on(addActivitySuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: false,
        
        }
))
    ,
    on(addActivityError, (state, { payload }) => ({
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