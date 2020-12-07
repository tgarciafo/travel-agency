import { createReducer, on } from '@ngrx/store';
import { User, Education } from '../models/user';
import {
    addEducationError, addEducationSuccess, getUser, getUserError,
    getUserSuccess, registerUser, updateUserError, updateUserSuccess, registerUserError,
    registerUserSuccess, updateUser, addEducation, logoutUser, addUserActivity, addUserActivityError,
    addUserActivitySuccess, updateUserActivity, updateUserActivityError, updateUserActivitySuccess, deleteUserActivity,
    deleteUserActivityError, deleteUserActivitySuccess, deleteEducation, deleteEducationError, deleteEducationSuccess,
    updateEducation, updateEducationError, updateEducationSuccess, addLanguageSuccess, addLanguageError, addLanguage,
    updateLanguageSuccess,updateLanguageError,updateLanguage,deleteLanguageSuccess,deleteLanguageError,deleteLanguage
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
    on(addLanguage, state => ({ ...state, loading: true, error: null })),
    on(addLanguageSuccess, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: action.user
    }
    )),
    on(addLanguageError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(updateLanguage, state => ({ ...state, loading: true, error: null })),
    on(updateLanguageSuccess, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: action.user
    }
    )),
    on(updateLanguageError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(deleteLanguage, state => ({ ...state, loading: true, error: null })),
    on(deleteLanguageSuccess, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: action.user
    }
    )),
    on(deleteLanguageError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(addUserActivity, state => ({ ...state, loading: true })),
    on(addUserActivitySuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: false,
        
        }
))
    ,
    on(addUserActivityError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(updateUserActivity, state => ({ ...state, loading: true, error: null })),
    on(updateUserActivitySuccess, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: action.user
    }
    )),
    on(updateUserActivityError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(deleteUserActivity, state => ({ ...state, loading: true, error: null })),
    on(deleteUserActivitySuccess, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: action.user
    }
    )),
    on(deleteUserActivityError, (state, { payload }) => ({
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