import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Education } from 'src/app/views/profiles/models/user';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { addEducation } from 'src/app/views/profiles/actions';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  users: User[];
  public user: User;

  public type: FormControl;
  public level: FormControl;
  public name: FormControl;
  public university: FormControl;
  public finishDate: FormControl;
  public addEducationForm: FormGroup;
  private date = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;

  constructor(
    private formBuilder: FormBuilder, private router: Router, private store: Store<AppState>) {
      this.store.select('profilesApp').subscribe(profileResponse => {
        this.user = profileResponse.user;
      });
  }

  ngOnInit(): void {

    this.type = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]);
    this.university = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]);
    this.finishDate = new FormControl('', Validators.pattern(this.date));

    this.addEducationForm = this.formBuilder.group({
      type: this.type,
      level: this.level,
      name: this.name,
      university: this.university,
      finishDate: this.finishDate,
    });
   
  }

  addEducation() {
    const form = this.addEducationForm.value as Education;

    this.user.education.push(form);


    this.store.dispatch(addEducation({ user: this.user}));

    this.router.navigateByUrl('/profile');

  }
}