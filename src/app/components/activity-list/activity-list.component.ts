import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Activity } from '../../Models/activity';
import { ActivityService } from '../../Services/activity.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities: Activity[];

  activity: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  detall(activity) {
    this.activity = activity;
}

  getActivities(): void{
    this.activityService.getActivities()
      .subscribe(activities => this.activities = activities);
  }

}
