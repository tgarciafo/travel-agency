import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getLogin } from '../actions';
import { UserService } from '../../Services/user.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LoginEffects{

    constructor(
        private actions$: Actions,
        private usersService: UserService
    ) { }
    
    getUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getLogin),
            
    ))
}