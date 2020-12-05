import { createReducer, on } from '@ngrx/store';
import { User } from '../../Models/user';
import { addEducationError,addEducationSuccess,getUser,getUserError,getUserSuccess,registerUser,editUserError,editUserSuccess,registerUserError,registerUserSuccess, editUser, getAllUsers, getAllUsersSuccess, getAllUsersError, addEducation } from '../actions/profile.actions';

export interface ProfileState{
    users: User[];
    user: User;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: ProfileState = {
    users: [],
    user: new User(),
    loading: false,
    loaded: false,
    error: null
};

const _profileReducer = createReducer(
    initialState,
    on(registerUser, state => ({ ...state, loading: true })),
    on(registerUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...state.users, user]
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
        user: {...user, ...education }
    }))
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
    on(getAllUsers, state => ({ ...state, loading: true })),
    on(getAllUsersSuccess, (state, { users }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...users]
    })),
    on(getAllUsersError, (state, { payload }) => ({
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
    }))
)

export function profileReducer(state, action) {
    return _profileReducer(state, action);
}