import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Education } from 'src/app/Models/user';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { getAllUsers } from 'src/app/profiles/actions';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  users: User[];

  public user: User;
  public _education: Education;

  public type: FormControl;
  public level: FormControl;
  public name: FormControl;
  public university: FormControl;
  public finishDate: FormControl;
  public addEducationForm: FormGroup;
  private date = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;

  constructor(
    private formBuilder: FormBuilder, private router: Router, private _global: GlobalService, private store: Store<AppState>) {
    this.user = this._global.globalVar;
    this._education = this._global.globalEducation;
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
    this.store.select('profilesApp').subscribe(profileResponse => {
      this.users = profileResponse.users;
    });
    this.store.dispatch(getAllUsers());
  }

  addEducation() {
    const form = this.addEducationForm.value as Education;

    if (this.user.education !== undefined) {

      this.user.education = [...this.user.education, form];

      this.router.navigateByUrl('/profile');
    } else {
      this.user.education = [form];

      this.router.navigateByUrl('/profile');

    }
 
  }
}