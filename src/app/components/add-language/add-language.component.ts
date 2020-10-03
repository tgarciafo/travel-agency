import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Languages } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';

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

  constructor(
    private formBuilder: FormBuilder, private router: Router, private userService: UserService, private _global: GlobalService) {
    this.user = this._global.globalVar;
    this._language = this._global.globalLanguage;
  }

  ngOnInit(): void {

    this.level = new FormControl('');
    this.language = new FormControl('');
    this.finishDate = new FormControl('');

    this.addLanguageForm = this.formBuilder.group({
      level: this.level,
      language: this.language,
      finishDate: this.finishDate,
    });
    this.getUsers();
    

  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  addLanguage() {
    const form = this.addLanguageForm.value as Languages;

    this.user.languages = [...this.user.languages, form];

    console.log(this.user);

    this.router.navigateByUrl('/profile');

  }
}