import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    getUserSuccess, getUserError, getUser, registerUser, editUserSuccess, editUserError, registerUserError,
    registerUserSuccess, editUser
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

    editUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(editUser),
            mergeMap(({id, user}) =>
                this.userService.updateUser(id).pipe(
                    map(() => editUserSuccess({ id, user } )),
                    catchError((err) => of(editUserError({payload: err})))
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
