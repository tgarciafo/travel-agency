import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { Activity } from '../../Models/activity';
import { GlobalService } from '../../Services/global.service';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { getAllActivities } from '../actions/activity.actions';
import { getUserLogin} from 'src/app/logins/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities: Activity[];
  user: User;
  activity: Activity[];
  public message: string;

  constructor(private store: Store<AppState>, private _globalService: GlobalService) {
    this.user = this._globalService.globalVar;

  }

  ngOnInit(): void {
    this.store.select('activitiesApp').subscribe(activitiesResponse => {
      this.activities = activitiesResponse.activities;
    });

    this.store.dispatch(getAllActivities());

    this.store.select('authApp').subscribe(authResponse => {
      this.user = authResponse.user;
    });

    this.store.dispatch(getUserLogin({ user: this.user }));

    

    /* this.store.dispatch(getAllActivities()); */

    this.checkUser()
  }
 
  detall(activity) {
    this.activity = activity;
  }
 
  checkUser() {
    if (this.user.email === undefined) {
      this.message = 'El correu ' + this.user.email + ' no existeix a la base de dades';
    } else {

      console.log('Welcome ' + this.user.name);

      if (this.user.type === 'Tourist') {
        document.getElementById('logout').style.display = 'inline';
        document.getElementById('home').style.display = 'inline';
        document.getElementById('favorites').style.display = 'inline';
        document.getElementById('myActivities').style.display = 'inline';
        document.getElementById('profile').style.display = 'inline';
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
      }
      else if (this.user.type === 'Company') {
        document.getElementById('logout').style.display = 'inline';
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
        document.getElementById('home').style.display = 'inline';
        document.getElementById('profile').style.display = 'inline';
        document.getElementById('admin').style.display = 'inline';
      }
    }
  }
}

