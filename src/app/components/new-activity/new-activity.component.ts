import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckWord } from 'src/app/Directives/check-word.validator';
import { checkEquality } from 'src/app/Directives/check-equality.validator';
import { Activity } from 'src/app/Models/activity';
import { ActivityService } from '../../Services/activity.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {

  activities: Activity[];

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

  constructor(private formBuilder: FormBuilder, private activityService: ActivityService) { }

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

  }

  getActivities(): void {
    this.activityService.getActivities()
      .subscribe(activities => this.activities = activities);
  }

  addNewActivity() {
    this.activityService.addActivity(this.newActivityForm.value as Activity)
      .subscribe(activity => {
        this.activities.push(activity);
      });
  }

}