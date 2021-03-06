import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Education } from 'src/app/views/profiles/models/user';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/Services/global.service';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { updateEducation } from '../../actions';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent implements OnInit {

  users: User[];

  public user: User;
  public _education: Education;

  public type: FormControl;
  public level: FormControl;
  public name: FormControl;
  public university: FormControl;
  public finishDate: FormControl;
  public educationForm: FormGroup;
  private date = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;

  constructor(
    private formBuilder: FormBuilder, private router: Router, private store: Store<AppState>, private _global: GlobalService) {
      this.store.select('profilesApp').subscribe(profileResponse => {
        this.user = profileResponse.user;
      });
  }

  ngOnInit(): void {

    this.type = new FormControl(this._education.type, Validators.required);
    this.level = new FormControl(this._education.level, Validators.required);
    this.name = new FormControl(this._education.name, [Validators.required, Validators.minLength(3), Validators.maxLength(55)]);
    this.university = new FormControl(this._education.university, [Validators.required, Validators.minLength(3), Validators.maxLength(55)]);
    this.finishDate = new FormControl(this._education.finishDate, Validators.pattern(this.date));

    this.educationForm = this.formBuilder.group({
      type: this.type,
      level: this.level,
      name: this.name,
      university: this.university,
      finishDate: this.finishDate,
    });
    
  }

  updateEducation() {
    const form = this.educationForm.value as Education;

   /*  const array = this.user;

    for (let i = 0; i < array.education.length; i++) {
      if ((array[i].name === this._education.name) && (array[i].level === this._education.level)) {
        array.education.splice(i, 1);
      }
    } */
    /* this.user.education = [...this.user.education, form]; */

    this.user.education.push(form);

    this.store.dispatch(updateEducation({ user: this.user}));

    this.router.navigateByUrl('/profile');

  }

  changeType(e) {
    this.educationForm.get('level').setValue(undefined);
  }
}
