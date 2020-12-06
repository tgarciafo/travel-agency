import { Component, OnInit,  Input } from '@angular/core';

import { Router } from '@angular/router';

import { Activity } from 'src/app/views/activities/models/activity';
import { User } from 'src/app/views/profiles/models/user';
import { AppState } from 'src/app/app.reducer';
import { deleteActivity, createActivity, subscribeActivity } from '../../../activities/actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-my-activities-details',
  templateUrl: './my-activities-details.component.html',
  styleUrls: ['./my-activities-details.component.css']
})
export class MyActivitiesDetailsComponent implements OnInit {

  @Input() activity: Activity;

  user: User;
  users: User[];
  activities: Activity[];
  constructor(private store: Store<AppState>,
              private router: Router)
  {
    this.store.select('profilesApp').subscribe(profileResponse => {
      this.user = profileResponse.user;
    });
  }

  ngOnInit(): void {

    this.registered();
    this.store.select('activitiesApp').subscribe(activitiesResponse => {
      this.activities = activitiesResponse.activities;
    });

  }

  registered() {
    return this.user !== undefined;
  }

  subscribed(activity) {
    const array = this.user.activities;

    for (let i = 0; i < array.length; i++){
      if (array[i].id === activity.id) {
        return true;
      }
    }
  }

  signUp(activity) {

    /* this.activities = this.activities.filter(a => a !== activity); */
/*     this.activityService.deleteActivity(activity).subscribe();
 */
    /* this.store.dispatch(deleteActivity({ id: activity.id }));

    const registrats = activity.peopleRegistered + 1;

    activity.peopleRegistered = registrats;

    const limit = activity.limitCapacity;

    if (registrats === limit) {
      activity.state = 'Complete';
    }

    this.store.dispatch(createActivity({ activity })); */

    this.store.dispatch(subscribeActivity({ id: activity.id,  activity } ));

    this.router.navigateByUrl('/login', { skipLocationChange: true });
    this.router.navigateByUrl('/myActivities');

    this.user.activities = [...this.user.activities, activity];

  }

  unsubscribe(activity) {
    const array = this.user.activities;

    for (let i = 0; i < array.length; i++){
      if (array[i].id === activity.id) {
        array.splice(i, 1);
        }
    }

    this.activities = this.activities.filter(a => a !== activity);
    this.store.dispatch(deleteActivity({ id: activity.id }));

    /* this.activityService.deleteActivity(activity).subscribe(); */

    if (activity.peopleRegistered === activity.limitCapacity) {
      activity.state = 'Places available';
    }

    const registrats = activity.peopleRegistered - 1;

    activity.peopleRegistered = registrats;

    this.store.dispatch(createActivity({  activity } ));

    this.router.navigateByUrl('/login', { skipLocationChange: true });
    this.activity = undefined;
    this.router.navigateByUrl('/myActivities');

  }

}
