import { createAction, props } from '@ngrx/store';
import { User } from '../../Models/user';

export const getLogin = createAction(
    '[Login Page] Login',
    props<{ email: string, password: string }>()
);
