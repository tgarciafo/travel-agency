import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginError, logout } from '../actions';
import { UserService } from '../../Services/user.service';
import { mergeMap, map, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { Credentials } from '../models/credentials';
import { User } from 'src/app/Models/user';


@Injectable()
export class LoginEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            exhaustMap(({ credentials }) =>
                this.userService.login(credentials).pipe(
                    map((user) => loginSuccess({ credentials })),
                    catchError((error) => of(loginError({ payload: error })))
                )
            )
        )
    );
}