import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginError, logout } from '../actions';
import { UserService } from '../../Services/user.service';
import { mergeMap, map, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { Credentials } from '../models/credentials';
import { User } from 'src/app/Models/user';
import { GlobalService } from 'src/app/Services/global.service';
import { Store } from '@ngrx/store';
import { getAllUsers } from './../../profiles/actions';
import { AppState } from 'src/app/app.reducer';


@Injectable()
export class LoginEffects {
    public message: string;
    users: User[];
    public user: User = new User();
    constructor(
        private actions$: Actions,
        private userService: UserService,
        private _globalService: GlobalService,
        private store: Store<AppState>,
        
        
    ) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            exhaustMap(({ credentials }) =>
                this.userService.login(credentials).pipe(
                    map(user => {
                        
                        this.store.select('profilesApp').subscribe(profileResponse => {
                            this.users = profileResponse.users;
                          });
                        this.store.dispatch(getAllUsers());

                        this.user.email =  credentials.email;
                        this.user.password = credentials.password;
                        const obj = this.users.find(obj => obj.email === this.user.email);


                        if (credentials.password === obj.password) {
                            this._globalService.globalVar = obj;
                            if (obj.type === 'Tourist') {
                                document.getElementById('logout').style.display = 'inline';
                                document.getElementById('home').style.display = 'inline';
                                document.getElementById('favorites').style.display = 'inline';
                                document.getElementById('myActivities').style.display = 'inline';
                                document.getElementById('profile').style.display = 'inline';
                                document.getElementById('login').style.display = 'none';
                                document.getElementById('register').style.display = 'none';
                              }
                              else if (obj.type === 'Company') {
                                document.getElementById('logout').style.display = 'inline';
                                document.getElementById('login').style.display = 'none';
                                document.getElementById('register').style.display = 'none';
                                document.getElementById('home').style.display = 'inline';
                                document.getElementById('profile').style.display = 'inline';
                                document.getElementById('admin').style.display = 'inline';
                              }
                            return loginSuccess({ credentials });
                        } else {
                            this.message = 'El password no és correcte';
                        }
                    }
                    ),
                    catchError((error) => of(loginError({ payload: error })))
                )
            )
        )
    );
}