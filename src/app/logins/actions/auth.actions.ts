import { createAction, props } from '@ngrx/store';
import { User } from '../../Models/user';

export const loginSuccess = createAction(
    '[Login Page] Login Success',
    props<{ user: User }>()
);

export const getUserLogin = createAction(
    '[Login Page] Login Get User Login',
    props<{ user: User }>()
);

export const getUserLoginSuccess = createAction(
    '[Login Page] Login Get User Login Success',
    props<{user: User }>()
);

export const loginError = createAction(
    '[Login Page] Login Error',
    props<{ payload: any }>()
);