import { Injectable } from '@angular/core';
import { User } from './../Models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter, find } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Credentials } from '../logins/models/credentials';
import { GlobalService } from '../Services/global.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private _globalService: GlobalService, private router: Router
  ) { }

  isLoggedIn(credentials: Credentials){

    const obj = this.getUsers().pipe(map(users => users.find(user => user.email === credentials.email)));
  
    if (obj == null) {
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

  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_=>this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  getUser(id: number): Observable<User>{
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  updateUser(user: User): Observable<any>{
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updatedUser'))
    );
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
