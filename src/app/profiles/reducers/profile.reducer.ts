import { createReducer, on } from '@ngrx/store';
import { User } from '../../Models/user';
import { createUser, editUser, deleteUser, getAllUsers, getAllUsersSuccess, getAllUsersError } from '../actions/profile.actions';

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

    on(createUser, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: false,
        users: [...state.users, user]
    })),
    on(editUser, (state, { id, user }) => ({
        ...state,
        loading: false,
        loaded: false,
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
    on(deleteUser, (state, { id }) => ({
        ...state,
        loading: false,
        loaded: false,
        users: [...state.users.filter(user=>user.id !== id)]
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