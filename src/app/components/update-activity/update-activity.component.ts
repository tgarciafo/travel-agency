import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckWord } from 'src/app/Directives/check-word.validator';
import { checkEquality } from 'src/app/Directives/check-equality.validator';
import { Activity } from 'src/app/Models/activity';
import { ActivityService } from '../../Services/activity.service';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit {

  public user: User;
  users: User[];
  activities: Activity[];

  public activity: Activity;

  public name: FormControl;
  public category: FormControl;
  public subcategory: FormControl;
  public description: FormControl;
  public language: FormControl;
  public date: FormControl;
  public price: FormControl;
  public minCapacity: FormControl;
  public limitCapacity: FormControl;
  public state: FormControl;
  public updateActivityForm: FormGroup;

  constructor(private router: Router, private userService: UserService, private _global: GlobalService,
              private formBuilder: FormBuilder, private activityService: ActivityService)
  { 
    this.user = this._global.globalVar;
    this.activity = this._global.globalActivity;

    }

  ngOnInit(): void {

    this.name = new FormControl('');
    this.category = new FormControl('');
    this.subcategory = new FormControl('');
    this.description = new FormControl('');
    this.language = new FormControl('');
    this.date = new FormControl('');
    this.price = new FormControl('');
    this.minCapacity = new FormControl('');
    this.limitCapacity = new FormControl('');
    this.state = new FormControl('');

    this.updateActivityForm = this.formBuilder.group({
      name: this.name,
      category: this.category,
      subcategory: this.subcategory,
      description: this.description,
      language: this.language,
      date: this.date,
      price: this.price,
      minCapacity: this.minCapacity,
      limitCapacity: this.limitCapacity,
      state: this.state
    });

    this.getActivities();
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  getActivities(): void {
    this.activityService.getActivities()
      .subscribe(activities => this.activities = activities);
  }

  updateActivity() {
    const form = this.updateActivityForm.value as Activity;

    const array = this.user.activities;

    for (let i = 0; i < array.length; i++) {
      if ((array[i].id === this.activity.id)) {
        array.splice(i, 1);
      }
    }

    this.activities = this.activities.filter(a => a !== this.activity);
    this.activityService.deleteActivity(this.activity).subscribe();

    this.activityService.addActivity(form)
      .subscribe(form => {
        this.activities.push(form);
        this.user.activities = [...this.user.activities, form];
        this.router.navigateByUrl('/admin');
      });
  }

}