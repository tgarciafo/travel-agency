import { Injectable } from '@angular/core';
import { User } from './../Models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map} from 'rxjs/operators';
import { MessageService } from '../../../shared/Services/message.service';
import { Credentials } from '../../logins/models/credentials';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  public message: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  login({email, password}: Credentials): Observable<any> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map((users) => {
        const user = users.find(x => x.profile.email === email && x.profile.password === password);
        if (user !== undefined) {
          return user;
        } else {
          throw throwError('Invalid username or password');
          }
      })
        );
    }

  isLoggedIn(): boolean{
    return false;
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

  updateUser(id:number): Observable<any>{
    console.log(id)
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`updated user id=${id}`)),
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
