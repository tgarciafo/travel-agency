import { Injectable } from '@angular/core';
import { User } from './../Models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fromEventPattern, Observable, of } from 'rxjs';
import { catchError, map, tap, filter, find } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Credentials } from '../logins/models/credentials';
import { GlobalService } from '../Services/global.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usersUrl = 'api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private _globalService: GlobalService, private router: Router,
    private userService: UserService
  ) { }

 /*  isLoggedIn(): boolean{
    return false;
  } */

  isLoggedIn(credentials: Credentials){

    const obj = this.userService.getUsers().pipe(map(users => users.find(user => user.email === credentials.email)));
    console.log(obj)
    return obj;
    
    /* if (obj == null) {
        console.log('El correu ' + credentials.email + ' no existeix a la base de dades');
      } else {
  
        if (obj.password && obj === credentials.password) {
          console.log('Welcome ' + obj.name);
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
          this.router.navigate(['activityList']);
        } else {
          this.message = 'El password no és correcte';
        }
      }
 */
  }
}
