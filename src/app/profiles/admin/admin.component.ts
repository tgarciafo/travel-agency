import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Activity } from 'src/app/Models/activity';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { getActivity, deleteActivity } from 'src/app/activities/actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 activities: Activity[];
  users: User[];
  user: User;
  activity: Activity;

  constructor( private router: Router,
    private store: Store<AppState>) {

      this.store.select('profilesApp').subscribe(profileResponse => {
        this.user = profileResponse.user;
      });
   }

  ngOnInit(): void {

    if (this.user !== undefined) {
      this.store.select('profilesApp').subscribe(profileResponse => {
        this.users = profileResponse.users;
      });
      this.store.select('activitiesApp').subscribe(activitiesResponse => {
        this.activities = activitiesResponse.activities;
      });
    }
  }

  updateActivity(activity) {
    this.store.dispatch(getActivity({ activity: activity }));
    
    this.router.navigateByUrl('/updateActivity');
  }

  deleteActivity(activity: Activity): void{
    const array = this.user.activities;

    for (let i = 0; i < array.length; i++) {
      if ((array[i].id === activity.id)) {
        array.splice(i, 1);
      }
    }
    this.activities = this.activities.filter(a => a !== activity);
  /* this.activityService.deleteActivity(activity).subscribe(); */
    this.store.dispatch(deleteActivity({ id: activity.id } ));

  }

  addActivity() {
    this.router.navigateByUrl('/newActivity');
  }

}
