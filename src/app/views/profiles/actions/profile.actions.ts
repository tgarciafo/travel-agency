import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../logins/models/credentials';
import { Education, User } from '../models/user';
import { Activity } from '../../activities/models/activity';

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

export const addEducation = createAction(
    '[USER] addEducation User',
    props<{ id: number, user: User, education: Education }>()
);

export const addEducationSuccess = createAction(
    '[USER] addEducationSuccess User',
    props<{ id: number, user: User, education: Education }>()
);

export const addEducationError = createAction(
    '[USER] addEducationError User',
    props<{ payload: any }>()
);

export const addActivity = createAction(
    '[USER] addActivity User',
    props<{ activity: Activity }>()
);

export const addActivitySuccess = createAction(
    '[USER] addActivitySuccess User',
    props<{ activity: Activity }>()
);

export const addActivityError = createAction(
    '[USER] addActivityError User',
    props<{ payload: any }>()
);

export const getUser = createAction(
    '[USER] Get user',
    props<{ credentials: Credentials }>()
);

export const getUserSuccess = createAction(
    '[USER] Get user success',
    props<{ user: User }>()
);

export const getUserError = createAction(
    '[USER] Get user error',
    props<{payload: any}>()
);

export const logoutUser = createAction(
    '[USER] logoutUser'
);
