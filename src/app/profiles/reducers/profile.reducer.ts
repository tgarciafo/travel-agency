import { createReducer, on } from '@ngrx/store';
import { User } from '../../Models/user';
import { registerUser,editUserError,editUserSuccess,registerUserError,registerUserSuccess, editUser, getAllUsers, getAllUsersSuccess, getAllUsersError } from '../actions/profile.actions';

export interface ProfileState{
    users: User[];
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: ProfileState = {
    users: [],
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
        users: [...state.users.map((_user) => {
            if (_user.id === id) {
                return {
                    ..._user,
                    ...user
                };
            } else {
                return _user;
            }
        })]
    })),
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
    }))
)

export function profileReducer(state, action) {
    return _profileReducer(state, action);
}