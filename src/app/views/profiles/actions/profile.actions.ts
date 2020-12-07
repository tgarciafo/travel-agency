import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../logins/models/credentials';
import { User } from '../models/user';

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

export const updateUser = createAction(
    '[USER] Edit User',
    props<{ user:User }>()
);

export const updateUserSuccess = createAction(
    '[USER] Edit User Success',
    props<{ user:User }>()
);

export const updateUserError = createAction(
    '[USER] Edit User Error',
    props<{ payload: any }>()
);

export const addEducation = createAction(
    '[USER] addEducation User',
    props<{ user: User }>()
);

export const addEducationSuccess = createAction(
    '[USER] addEducationSuccess User',
    props<{ user: User }>()
);

export const addEducationError = createAction(
    '[USER] addEducationError User',
    props<{ payload: any }>()
);

export const updateEducation = createAction(
    '[USER] updateEducation User',
    props<{ user:User }>()
);

export const updateEducationSuccess = createAction(
    '[USER] updateEducationSuccess User',
    props<{ user:User }>()
);

export const updateEducationError = createAction(
    '[USER] updateEducationError User',
    props<{ payload: any }>()
);

export const deleteEducation = createAction(
    '[USER] deleteEducation User',
    props<{ user:User }>()
);

export const deleteEducationSuccess = createAction(
    '[USER] deleteEducationSuccess User',
    props<{ user:User }>()
);

export const deleteEducationError = createAction(
    '[USER] deleteEducationError User',
    props<{ payload: any }>()
);

export const addLanguage = createAction(
    '[USER] addLanguage User',
    props<{ user:User }>()
);

export const addLanguageSuccess = createAction(
    '[USER] addLanguageSuccess User',
    props<{ user:User }>()
);

export const addLanguageError = createAction(
    '[USER] addLanguageError User',
    props<{ payload: any }>()
);

export const updateLanguage = createAction(
    '[USER] updateLanguage User',
    props<{ user:User }>()
);

export const updateLanguageSuccess = createAction(
    '[USER] updateLanguageSuccess User',
    props<{ user:User }>()
);

export const updateLanguageError = createAction(
    '[USER] updateLanguageError User',
    props<{ payload: any }>()
);

export const deleteLanguage = createAction(
    '[USER] deleteLanguage User',
    props<{ user:User }>()
);

export const deleteLanguageSuccess = createAction(
    '[USER] deleteLanguageSuccess User',
    props<{ user:User }>()
);

export const deleteLanguageError = createAction(
    '[USER] deleteanguageError User',
    props<{ payload: any }>()
);

export const addActivity = createAction(
    '[USER] addActivity User',
    props<{ user:User }>()
);

export const addActivitySuccess = createAction(
    '[USER] addActivitySuccess User',
    props<{ user:User }>()
);

export const addActivityError = createAction(
    '[USER] addActivityError User',
    props<{ payload: any }>()
);

export const deleteActivity = createAction(
    '[USER] deleteActivity User',
    props<{ user:User }>()
);

export const deleteActivitySuccess = createAction(
    '[USER] deleteActivitySuccess User',
    props<{ user:User }>()
);

export const deleteActivityError = createAction(
    '[USER] deleteActivityError User',
    props<{ payload: any }>()
);

export const updateActivity = createAction(
    '[USER] updateActivity User',
    props<{ user:User }>()
);

export const updateActivitySuccess = createAction(
    '[USER] updateActivitySuccess User',
    props<{ user:User }>()
);

export const updateActivityError = createAction(
    '[USER] updateActivityError User',
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
