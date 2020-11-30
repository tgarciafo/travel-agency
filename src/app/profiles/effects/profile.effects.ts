import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { registerUser,editUserSuccess,editUserError, getAllUsers,registerUserError, getAllUsersError, getAllUsersSuccess, registerUserSuccess, editUser } from '../actions';
import { UserService } from '../../Services/user.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/app/Models/user';

@Injectable()
export class ProfilesEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    getUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getAllUsers),
            mergeMap(() =>
                this.userService.getUsers().pipe(
                    map((users) => getAllUsersSuccess({ users: users })),
                    catchError((err) => of(getAllUsersError({ payload: err })))
                ))
        ));

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
                this.userService.updateUser(user).pipe(
                    map(() => editUserSuccess({ id, user } )),
                    catchError((err) => of(editUserError({payload: err})))
                ))
        )
    );
}
