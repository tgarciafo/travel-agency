import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Activity } from 'src/app/Models/activity';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { createActivity, deleteActivity, editActivity, getAllActivities } from '../actions/activity.actions';
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
  public state: string;
  public peopleRegistered: number;
  public updateActivityForm: FormGroup;
  private datePattern = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;

  constructor(private router: Router,
              private formBuilder: FormBuilder, private store: Store<AppState>)
  {
    this.store.select('profilesApp').subscribe(profileResponse => {
      this.user = profileResponse.user;
    });
    this.store.select('activitiesApp').subscribe(activityResponse => {
      this.activity = activityResponse.activity;
    });
    

    }

  ngOnInit(): void {

    this.name = new FormControl(this.activity.name, [Validators.required, Validators.minLength(3), Validators.maxLength(55)]);
    this.category = new FormControl(this.activity.category, Validators.required);
    this.subcategory = new FormControl(this.activity.subcategory, Validators.required);
    this.description = new FormControl(this.activity.description);
    this.language = new FormControl(this.activity.language);
    this.date = new FormControl(this.activity.date, Validators.pattern(this.datePattern));
    this.price = new FormControl(this.activity.price, [Validators.required, Validators.min(0)]);
    this.minCapacity = new FormControl(this.activity.minCapacity, [Validators.required, Validators.min(0)]);
    this.limitCapacity = new FormControl(this.activity.limitCapacity, [Validators.required, Validators.min(0)]);
    this.peopleRegistered = this.activity.peopleRegistered;
    this.state = this.activity.state;

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
      state: this.state,
      peopleRegistered: this.peopleRegistered
    });

    this.store.select('activitiesApp').subscribe(activitiesResponse => {
      this.activities = activitiesResponse.activities;
    });
    
  }

  updateActivity() {
    const form = this.updateActivityForm.value as Activity;

    form.state = this.state;

    const array = this.user.activities;

    for (let i = 0; i < array.length; i++) {
      if ((array[i].id === this.activity.id)) {
        array.splice(i, 1);
      }
    }

    /* this.store.dispatch(editActivity({ id: this.activity.id, activity: form  })) */

    this.activities = this.activities.filter(a => a !== this.activity);
    this.store.dispatch(deleteActivity({ id: this.activity.id }));
    this.store.dispatch(createActivity({ activity: form }));
    this.user.activities = [...this.user.activities, form];
    this.router.navigateByUrl('/admin');

  }

  calculateState() {
    if (this.state !== 'Cancelled') {
      if (this.limitCapacity.value > this.peopleRegistered) {
        this.state = 'Places available';
      } else if (this.limitCapacity.value === this.peopleRegistered) {
        this.state = 'Complete';
      }
    }
  }

  cancelActivity() {
    this.state = 'Cancelled';
  }

  changeCategory(e) {
    this.updateActivityForm.get('subcategory').setValue(undefined);
  }
}