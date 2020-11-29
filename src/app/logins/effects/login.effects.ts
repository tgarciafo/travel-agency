import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginError, logout, getUserLoginSuccess, getUserLogin } from '../actions';
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
            mergeMap( ({credentials}) =>
                from(this.userService.login( credentials ))),
            map((user) =>
                        loginSuccess({ user } )),
            catchError((error) => of(loginError({ payload: error })))
        )
        
    )
    
    getlogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getUserLogin),
            mergeMap( (action) =>
                from(this.userService.getUser(action.user.id).pipe(
            map((user) =>
                        getUserLoginSuccess({ user } )),
            catchError((error) => of(loginError({ payload: error })))
                ))))
                
        
        )
}