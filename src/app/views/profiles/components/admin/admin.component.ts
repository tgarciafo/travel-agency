import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/views/profiles/models/user';
import { Activity } from 'src/app/views/activities/models/activity';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { deleteActivity, editActivity } from 'src/app/views/activities/actions';
import { updateUserActivity, deleteUserActivity } from '../../actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  activities: Activity[];
  user: User;
  activity: Activity;

  constructor( private router: Router, private store: Store<AppState>) {

      this.store.select('profilesApp').subscribe(profileResponse => {
        this.user = profileResponse.user;
      });
   }

  ngOnInit(): void {

    if (this.user !== undefined) {

      this.store.select('activitiesApp').subscribe(activitiesResponse => {
        this.activities = activitiesResponse.activities;
      });
    }
  }

  updateActivity(activity) {
    this.store.dispatch(editActivity(activity.id));
    this.store.dispatch(updateUserActivity({ user: this.user }));

    this.router.navigateByUrl('/updateActivity');
  }

  deleteActivity(activity: Activity): void{
    /* const array = this.user.activities;

    for (let i = 0; i < array.length; i++) {
      if ((array[i].id === activity.id)) {
        array.splice(i, 1);
      }
    }
    this.activities = this.activities.filter(a => a !== activity); */

    this.store.dispatch(deleteActivity(activity));
    this.store.dispatch(deleteUserActivity({ user: this.user } ));

  }

  addActivity() {
    this.router.navigateByUrl('/newActivity');
  }

}
