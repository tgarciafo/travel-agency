import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    getUserSuccess, getUserError, getUser, registerUser, updateUserSuccess, updateUserError, registerUserError,
    registerUserSuccess, updateUser, addEducationError, addEducationSuccess, addEducation, updateEducationSuccess,
    updateEducationError, updateEducation, deleteEducationSuccess, deleteEducationError, deleteEducation, addUserActivitySuccess,
    addUserActivityError, addUserActivity, updateUserActivitySuccess, updateUserActivityError, updateUserActivity, deleteUserActivitySuccess, deleteUserActivityError,
    deleteUserActivity, updateLanguage, deleteLanguage, updateLanguageError, addLanguage,
    updateLanguageSuccess, deleteLanguageError, deleteLanguageSuccess,addLanguageError,addLanguageSuccess
    
} from '../actions';
import { UserService } from '../services/user.service';
import { mergeMap, map, catchError,exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loginSuccess } from '../../logins/actions';

@Injectable()
export class ProfilesEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    registerUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerUser),
            mergeMap(action =>
                this.userService.addUser(action.user).pipe(
                    map((user) => registerUserSuccess({ user: user })),
                    catchError((err) => of(registerUserError({payload: err})))
                ))
        )
    );

    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateUser),
            mergeMap(({user}) =>
                this.userService.updateUser(user).pipe(
                    map(() => updateUserSuccess({ user } )),
                    catchError((err) => of(updateUserError({payload: err})))
                ))
        )
    );

    updateEducation$ = createEffect(() =>
    this.actions$.pipe(
        ofType(updateEducation),
        mergeMap(({user}) =>
            this.userService.updateUser(user).pipe(
                map(() => updateEducationSuccess({ user } )),
                catchError((err) => of(updateEducationError({payload: err})))
            ))
    )
    );

    deleteEducation$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteEducation),
            mergeMap(({user}) =>
                this.userService.updateUser(user).pipe(
                    map(() => deleteEducationSuccess({ user } )),
                    catchError((err) => of(deleteEducationError({payload: err})))
                ))
        )
    );

    addEducation$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addEducation),
            mergeMap(({user}) =>
                this.userService.updateUser(user).pipe(
                    map(() => addEducationSuccess({ user } )),
                    catchError((err) => of(addEducationError({payload: err})))
                ))
        )
    );

    updateLanguage$ = createEffect(() =>
    this.actions$.pipe(
        ofType(updateLanguage),
        mergeMap(({user}) =>
            this.userService.updateUser(user).pipe(
                map(() => updateLanguageSuccess({ user } )),
                catchError((err) => of(updateLanguageError({payload: err})))
            ))
    )
    );

    deleteLanguage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteLanguage),
            mergeMap(({user}) =>
                this.userService.updateUser(user).pipe(
                    map(() => deleteLanguageSuccess({ user } )),
                    catchError((err) => of(deleteLanguageError({payload: err})))
                ))
        )
    );

    addLanguage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addLanguage),
            mergeMap(({user}) =>
                this.userService.updateUser(user).pipe(
                    map(() => addLanguageSuccess({ user } )),
                    catchError((err) => of(addLanguageError({payload: err})))
                ))
        )
    );

    updateActivity$ = createEffect(() =>
    this.actions$.pipe(
        ofType(updateUserActivity),
        mergeMap(({user}) =>
            this.userService.updateUser(user).pipe(
                map(() => updateUserActivitySuccess({ user } )),
                catchError((err) => of(updateUserActivityError({payload: err})))
            ))
    )
    );

    deleteActivity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteUserActivity),
            mergeMap(({user}) =>
                this.userService.updateUser(user).pipe(
                    map(() => deleteUserActivitySuccess({ user } )),
                    catchError((err) => of(deleteUserActivityError({payload: err})))
                ))
        )
    );

    addUserActivity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addUserActivity),
            mergeMap(({user}) =>
                this.userService.updateUser(user).pipe(
                    map(() => addUserActivitySuccess({ user } )),
                    catchError((err) => of(addUserActivityError({payload: err})))
                ))
        )
    );

    getUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getUser, loginSuccess),
            exhaustMap(({credentials}) =>
                this.userService.login(credentials).pipe(
                    map((user) => getUserSuccess({ user })),
                    catchError((err) => of(getUserError({ payload: err })))
                ))
        ));
}
