import { Component, OnInit,  Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GlobalService } from '../../Services/global.service';

import { ActivityService } from '../../Services/activity.service';
import { Activity } from 'src/app/Models/activity';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-my-activities-details',
  templateUrl: './my-activities-details.component.html',
  styleUrls: ['./my-activities-details.component.css']
})
export class MyActivitiesDetailsComponent implements OnInit {

 
  @Input() activity: Activity;

  user: User;
  users: User[];
  constructor( private userService:UserService, private _globalService: GlobalService )
  {
    this.user = this._globalService.globalVar;
  }

  ngOnInit(): void {

    this.getUsers();
    this.registered();
  }

  registered() {
    return this._globalService.globalVar !== undefined;
  }

  subscribed(activity) {
    const array = this.user.activities;

    for (let i = 0; i < array.length; i++){
      if (array[i].id === activity.id) {
        return true;
      }
    }
  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  signUp(activity) {
    this.user.activities = [...this.user.activities, activity];
  }

  unsubscribe(activity) {
    const array = this.user.activities;

    for (let i = 0; i < array.length; i++){
      if (array[i].id === activity.id) {
        array.splice(i, 1);
        }
    }
  }

}
