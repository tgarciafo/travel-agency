import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Languages } from 'src/app/Models/user';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { getAllUsers } from 'src/app/profiles/actions';
@Component({
  selector: 'app-update-language',
  templateUrl: './update-language.component.html',
  styleUrls: ['./update-language.component.css']
})
export class UpdateLanguageComponent implements OnInit {

  users: User[];

  public user: User;
  public _language: Languages;

  public level: FormControl;
  public language: FormControl;
  public finishDate: FormControl;
  public languageForm: FormGroup;
  private date = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;

  constructor(
    private formBuilder: FormBuilder, private router: Router, private store: Store<AppState>, private _global: GlobalService) {
      this.store.select('profilesApp').subscribe(profileResponse => {
        this.user = profileResponse.user;
      });
    this._language = this._global.globalLanguage;
  }

  ngOnInit(): void {

    this.level = new FormControl(this._language.level, Validators.required);
    this.language = new FormControl(this._language.language, Validators.required);
    this.finishDate = new FormControl(this._language.finishDate, Validators.pattern(this.date));

    this.languageForm = this.formBuilder.group({
      level: this.level,
      language: this.language,
      finishDate: this.finishDate,
    });
    this.store.select('profilesApp').subscribe(profileResponse => {
      this.users = profileResponse.users;
    });
    this.store.dispatch(getAllUsers());

  }

  updateLanguage() {
    const form = this.languageForm.value as Languages;

    const array = this.user.languages;

    for (let i = 0; i < array.length; i++) {
      if ((array[i].language === this._language.language) && (array[i].level === this._language.level)) {
        array.splice(i, 1);
      }
    }
    this.user.languages = [...this.user.languages, form];

    this.router.navigateByUrl('/profile');

  }
}

