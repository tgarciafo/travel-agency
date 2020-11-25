import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginError, logout } from '../actions';
import { UserService } from '../../Services/user.service';
import { mergeMap, map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class LoginEffects{

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
    
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            mergeMap(({ credentials } ) =>
                this.userService.isLoggedIn(credentials).pipe(
                    map((credentials) =>
                        loginSuccess({ credentials })),
                    catchError((err) => of(loginError({ payload: err })))
                ))
            
    ));
}