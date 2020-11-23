import { createAction, props } from '@ngrx/store';
import { User } from '../../Models/user';

export const createUser = createAction(
    '[USER] Create User',
    props<{ user: User }>()
);

export const editUser = createAction(
    '[USER] Edit User',
    props<{ id: number, user: User }>()
);

export const deleteUser = createAction(
    '[USER] Delete User',
    props<{ id:number }>()
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
