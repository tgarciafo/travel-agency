import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { Activity } from '../../Models/activity';
import { ActivityService } from '../../Services/activity.service';
import { GlobalService } from '../../Services/global.service';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { getAllActivities } from '../actions/activity.actions';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities: Activity[];
  user: User;
  activity: Activity[];

  constructor(private store: Store<AppState>, private _global: GlobalService) {
    this.user = this._global.globalVar;

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
