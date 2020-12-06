import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginError, logout } from '../actions';
import { UserService } from '../../profiles/services/user.service';
import {  map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/app/views/profiles/models/user';
import { Store } from '@ngrx/store';
import { logoutUser, getUser } from './../../profiles/actions';
import { AppState } from 'src/app/app.reducer';
import { Router } from '@angular/router';


@Injectable()
export class LoginEffects {
    public message: string;
    public user: User = new User();
    constructor(
        private actions$: Actions,
        private userService: UserService,
        private store: Store<AppState>,
        private router: Router
        
        
    ) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            exhaustMap(({ credentials }) =>
                this.userService.login(credentials).pipe(
                    map((user) =>
                         loginSuccess({ credentials })
                    ),
                    catchError((error) => of(loginError({ payload: error })))
                )
            )
        )
    );

    loginSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginSuccess),
                tap(() =>
                    this.router.navigate(['activityList'])
                )
            ),
        { dispatch: false }
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logout),
            tap(action => {
                this.store.dispatch(logoutUser());
                return logout();
            })),
            {dispatch: false});
}