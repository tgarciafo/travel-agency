import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Education } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';

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

  constructor(
    private formBuilder: FormBuilder, private router: Router, private userService: UserService, private _global: GlobalService) {
    this.user = this._global.globalVar;
    this._education = this._global.globalEducation;
  }

  ngOnInit(): void {

    this.type = new FormControl('');
    this.level = new FormControl('');
    this.name = new FormControl('');
    this.university = new FormControl('');
    this.finishDate = new FormControl('');

    this.addEducationForm = this.formBuilder.group({
      type: this.type,
      level: this.level,
      name: this.name,
      university: this.university,
      finishDate: this.finishDate,
    });
    this.getUsers();
    

  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  addEducation() {
    const form = this.addEducationForm.value as Education;

    this.user.education = [...this.user.education, form];

    this.router.navigateByUrl('/profile');

  }
}