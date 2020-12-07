import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    getUserSuccess, getUserError, getUser, registerUser, updateUserSuccess, updateUserError, registerUserError,
    registerUserSuccess, updateUser, addEducationError, addEducationSuccess, addEducation, updateEducationSuccess,
    updateEducationError, updateEducation, deleteEducationSuccess, deleteEducationError, deleteEducation, addActivitySuccess,
    addActivityError, addActivity, updateActivitySuccess, updateActivityError, updateActivity, deleteActivitySuccess, deleteActivityError,
    deleteActivity
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

    deleteUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateUser),
            mergeMap(({user}) =>
                this.userService.updateUser(user).pipe(
                    map(() => updateUserSuccess({ user } )),
                    catchError((err) => of(updateUserError({payload: err})))
                ))
        )
    );

    addUser$ = createEffect(() =>
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

    updateActivity$ = createEffect(() =>
    this.actions$.pipe(
        ofType(updateActivity),
        mergeMap(({user}) =>
            this.userService.updateUser(user).pipe(
                map(() => updateActivitySuccess({ user } )),
                catchError((err) => of(updateActivityError({payload: err})))
            ))
    )
    );

    deleteActivity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteActivity),
            mergeMap(({user}) =>
                this.userService.updateUser(user).pipe(
                    map(() => deleteActivitySuccess({ user } )),
                    catchError((err) => of(deleteActivityError({payload: err})))
                ))
        )
    );

    addActivity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addActivity),
            mergeMap(({user}) =>
                this.userService.updateUser(user).pipe(
                    map(() => addActivitySuccess({ user } )),
                    catchError((err) => of(addActivityError({payload: err})))
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
