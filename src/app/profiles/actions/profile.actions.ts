import { createAction, props } from '@ngrx/store';
import { User } from '../../Models/user';

export const registerUser = createAction(
    '[USER] Register',
    props<{ user: User }>()
);

export const registerUserSuccess = createAction(
    '[USER] Create Activity success',
    props<{ user: User }>()
);
export const registerUserError = createAction(
    '[USER] Create Activity error',
    props<{payload: any}>()
);

export const editUser = createAction(
    '[USER] Edit User',
    props<{ id: number, user: User }>()
);

export const editUserSuccess = createAction(
    '[USER] Edit User Success',
    props<{ id: number, user: User }>()
);

export const editUserError = createAction(
    '[USER] Edit User Error',
    props<{ payload: any }>()
);

export const getAllUsers = createAction('[USER] Get all');

export const getAllUsersSuccess = createAction(
    '[USER] Get all success',
    props<{ users: User[] }>()
);

export const getAllUsersError = createAction(
    '[USER] Get all error',
    props<{payload: any}>()
);
