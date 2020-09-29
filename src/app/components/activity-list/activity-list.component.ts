import { Component, OnInit } from '@angular/core';

import { Activity } from '../../Models/activity';
import { ActivityService } from '../../Services/activity.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void{
    this.activityService.getActivities()
      .subscribe(activities => this.activities = activities);
  }

}
