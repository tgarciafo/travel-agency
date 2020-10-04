import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Activity } from 'src/app/Models/activity';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../Services/global.service';

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

  constructor(private _global: GlobalService, private router: Router, private userService: UserService) {
    this.user = this._global.globalVar;
   }

  ngOnInit(): void {

    if (this.user !== undefined) {
      this.getUsers();
      this.getActivities();
    }
  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  getActivities(): void{
    this.activities = this.user.activities;
    console.log(this.activities);
  }

  updateActivity(activity) {
    this._global.globalActivity = activity;
    this.router.navigateByUrl('/updateActivity');
  }

  deleteActivity(activity){
    const array = this.user.activities;

    for (let i = 0; i < array.length; i++) {
      if ((array[i].id === activity.id)) {
        array.splice(i, 1);
      }
    }
  }

  addActivity() {
    this.router.navigateByUrl('/newActivity');
  }

}
