import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ActivityService } from '../../activity.service';
import { Activity } from 'src/app/Models/activity';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  activity: Activity;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.activityService.getActivity(id)
      .subscribe(activity => this.activity = activity);
  }

  goBack(): void{
    this.location.back();
  }

}
