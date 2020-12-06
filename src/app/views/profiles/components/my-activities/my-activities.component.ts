import { Component, OnInit} from '@angular/core';
import { User } from '../../Models/user';
import { Activity } from '../../../activities/models/activity';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.css']
})
export class MyActivitiesComponent implements OnInit {

  activities: Activity[];
  user: User;
  activity: Activity[];

  constructor( private store: Store<AppState>) {
    this.store.select('profilesApp').subscribe(profileResponse => {
      this.user = profileResponse.user;
    });

  }

  ngOnInit(): void {

    if (this.user !== undefined) {
      this.getMyActivities();
    }
  }

  detall(activity) {
    this.activity = activity;
}

  getMyActivities(): void{
    this.activities = this.user.activities;
  }

}
