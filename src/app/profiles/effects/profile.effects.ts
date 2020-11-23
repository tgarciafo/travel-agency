import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createUser, getAllUsers, getAllUsersError, getAllUsersSuccess } from '../actions';
import { UserService } from '../../Services/user.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/app/Models/user';

@Injectable()
export class ProfilesEffects {

    constructor(
        private actions$: Actions,
        private usersService: UserService
    ) { }

    getUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getAllUsers),
            mergeMap(() =>
                this.usersService.getUsers().pipe(
                    map((users) => getAllUsersSuccess({ users: users })),
                    catchError((err) => of(getAllUsersError({ payload: err })))
                ))
        ));

    /* createUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createUser),
            mergeMap(() =>
                this.userService.addUser(new Activity()).pipe(
                    map((activity) => createActivity({ activity: activity }))
                ))
        )
    ); */
}
