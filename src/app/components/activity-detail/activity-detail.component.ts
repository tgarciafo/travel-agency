import { Component, OnInit,  Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GlobalService } from '../../Services/global.service';

import { ActivityService } from '../../Services/activity.service';
import { Activity } from 'src/app/Models/activity';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

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

  favorite() {

    const saved = JSON.parse(localStorage.getItem('favorites'));
console.log(this.activity, saved)
    if (saved !== null) {
      const fav = [];
      fav.push(this.activity);
      fav.push(saved);
      localStorage.setItem('favorites', JSON.stringify(fav));
    } else {
      const fav = [];
      fav.push(this.activity);
      console.log(fav)
      localStorage.setItem('favorites', JSON.stringify(fav));
    }
  }

  signUp(activity) {
    this.user.activities = [...this.user.activities, activity];
    console.log(this.user);
  }

  unsubscribe(activity) {
    const array = this.user.activities;

    for (let i = 0; i < array.length; i++){
      if (array[i].id === activity.id) {
        array.splice(i, 1);
        }
    }

    console.log(this.user);
  }

}
