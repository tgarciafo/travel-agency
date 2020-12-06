import { Component, OnInit } from '@angular/core';
import { User } from '../../../profiles/models/user';
import { Activity } from '../../Models/activity';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { getAllActivities } from '../../actions/activity.actions';

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

  constructor(private store: Store<AppState>) {

    this.store.select('profilesApp').subscribe(profileResponse => {
      this.user = profileResponse.user;
    });

  }

  ngOnInit(): void {
    this.store.select('activitiesApp').subscribe(activitiesResponse => {
      this.activities = activitiesResponse.activities;
    });

    
    this.store.dispatch(getAllActivities());
  
  }
 
  detall(activity) {
    this.activity = activity;
  }

}

