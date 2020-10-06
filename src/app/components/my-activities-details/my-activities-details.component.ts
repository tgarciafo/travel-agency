import { Component, OnInit,  Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Router } from '@angular/router';

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
  constructor( private userService:UserService, private router: Router, private _globalService: GlobalService )
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

  favorited() {
    const saved = JSON.parse(localStorage.getItem('favorites'));

    if (saved !== null) {

      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === this.activity.id) {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  favorite() {

    const saved = JSON.parse(localStorage.getItem('favorites'));

    if (saved !== null) {

      saved.push(this.activity);
      localStorage.setItem('favorites', JSON.stringify(saved));
    } else {
      const fav = [];
      fav.push(this.activity);
      localStorage.setItem('favorites', JSON.stringify(fav));
    }
  }

  unfavorite() {

    const saved = JSON.parse(localStorage.getItem('favorites'));

    for (let i = 0; i < saved.length; i++){
          if (saved[i].id === this.activity.id) {
            saved.splice(i, 1);
            }
    }

    localStorage.setItem('favorites', JSON.stringify(saved));

    const url = window.location.pathname;

    if (url === '/favorites') {
      this.reload(url);
    }
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/login', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
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
