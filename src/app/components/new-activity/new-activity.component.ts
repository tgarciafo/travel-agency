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
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {

  activities: Activity[];
  public user: User;
  users: User[];

  public activity: Activity = new Activity();

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
  public newActivityForm: FormGroup;

  constructor(private router: Router, private userService: UserService, private _global: GlobalService,
              private formBuilder: FormBuilder, private activityService: ActivityService)
  { 
      this.user = this._global.globalVar;
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

    this.newActivityForm = this.formBuilder.group({
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

  getActivities(): void {
    this.activityService.getActivities()
      .subscribe(activities => this.activities = activities);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  addNewActivity() {
    const form = this.newActivityForm.value as Activity;

    this.activityService.addActivity(form)
      .subscribe(activity => {
        this.activities.push(activity);
        this.user.activities = [...this.user.activities, form];
        this.router.navigateByUrl('/admin');

      });
  }

}