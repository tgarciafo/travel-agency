import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Languages } from 'src/app/Models/user';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { getAllUsers } from 'src/app/profiles/actions';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  users: User[];

  public user: User;
  public _language: Languages;

  public level: FormControl;
  public language: FormControl;
  public finishDate: FormControl;
  public addLanguageForm: FormGroup;
  private date = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;

  constructor(
    private formBuilder: FormBuilder, private router: Router, private store: Store<AppState>, private _global: GlobalService) {
      this.store.select('profilesApp').subscribe(profileResponse => {
        this.user = profileResponse.user;
      });
    this._language = this._global.globalLanguage;
  }

  ngOnInit(): void {

    this.level = new FormControl('', Validators.required);
    this.language = new FormControl('', Validators.required);
    this.finishDate = new FormControl('', Validators.pattern(this.date));

    this.addLanguageForm = this.formBuilder.group({
      level: this.level,
      language: this.language,
      finishDate: this.finishDate,
    });
    this.store.select('profilesApp').subscribe(profileResponse => {
      this.users = profileResponse.users;
    });
    
    this.store.dispatch(getAllUsers());
  }

  

  addLanguage() {
    const form = this.addLanguageForm.value as Languages;

    if (this.user.languages !== undefined) {


      this.user.languages = [...this.user.languages, form];

      this.router.navigateByUrl('/profile');

    } else {
      this.user.languages = [ form];

      this.router.navigateByUrl('/profile');
    }

  }
}