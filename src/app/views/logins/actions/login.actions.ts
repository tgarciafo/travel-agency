import { createAction, props } from '@ngrx/store';
import { Credentials } from '../models/credentials';

export const login = createAction(
    '[Login Page] Login',
    props<{ credentials: Credentials }>()
);

export const loginSuccess = createAction(
    '[Login Page] Login Success',
    props<{ credentials: Credentials }>()
);

export const loginError = createAction(
    '[Login Page] Login Error',
    props<{ payload: any }>()
);


export const logout = createAction(
    '[Login Page] Logout'
);

