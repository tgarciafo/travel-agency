import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginError, logout } from '../actions';
import { UserService } from '../../Services/user.service';
import { mergeMap, map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Credentials } from '../models/credentials';

@Injectable()
export class LoginEffects{

    constructor(
        private actions$: Actions,
        private usersService: UserService
    ) { }
    
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            exhaustMap(({ credentials }) =>
                this.usersService.isLoggedIn(credentials).pipe(
                    map((user) =>
                        loginSuccess({ credentials })),
                    catchError((err) => of(loginError({ payload: err })))
                ))
            
        ));
}