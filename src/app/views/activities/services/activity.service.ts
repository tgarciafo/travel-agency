import { Injectable } from '@angular/core';
import { Activity } from './../Models/activity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../../../shared/Services/message.service';

@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  private activitiesUrl = 'api/activities';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getActivities(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.activitiesUrl)
      .pipe(
        tap(_=>this.log('fetched activities')),
        catchError(this.handleError<Activity[]>('getActivities', []))
      );
  }

  getActivity(id: number): Observable<Activity>{
    const url = `${this.activitiesUrl}/${id}`;
    return this.http.get<Activity>(url).pipe(
      tap(_ => this.log(`fetched activity id=${id}`)),
      catchError(this.handleError<Activity>(`getActivity id=${id}`))
    );
  }

  updateActivity(activity: Activity): Observable<any>{
    return this.http.put(this.activitiesUrl, activity, this.httpOptions).pipe(
      tap(_ => this.log(`updated activity id=${activity.id}`)),
      catchError(this.handleError<any>('updateActivity'))
    );
  }

  addActivity(activity: Activity): Observable<Activity>{
    return this.http.post<Activity>(this.activitiesUrl, activity, this.httpOptions).pipe(
      tap((newActivity: Activity) => this.log(`added activity w/ id=${newActivity.id}`)),
      catchError(this.handleError<Activity>('addActivity'))
    );
  }

  deleteActivity(activity: Activity | number): Observable<Activity>{
    const id = typeof activity === 'number' ? activity : activity.id;
    const url = `${this.activitiesUrl}/${id}`;

    return this.http.delete<Activity>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted activity id=${id}`)),
      catchError(this.handleError<Activity>('deleteActivity'))
    );
  }

  private log(message: string) {
    this.messageService.add(`ActivityService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

