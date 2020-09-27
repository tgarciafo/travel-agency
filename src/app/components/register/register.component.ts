import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckWord } from 'src/app/Directives/check-word.validator';
import { checkEquality } from 'src/app/Directives/check-equality.validator';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();

  public name: FormControl;
  public surname: FormControl;
  public type: FormControl;
  public email: FormControl;
  public password: FormControl;
  public repeat_password: FormControl;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.name = new FormControl('');
    this.surname = new FormControl('');
    this.type = new FormControl('');
    this.email = new FormControl('');
    this.password = new FormControl('');
    this.repeat_password = new FormControl('');

    this.registerForm = this.formBuilder.group({
      name: this.name,
      surname: this.surname,
      type: this.type,
      email: this.email,
      password: this.password,
      repeat_password: this.repeat_password
    });

  }

  public checkRegister() {
    this.user.name = this.name.value;
    this.user.surname =  this.surname.value;
    this.user.type =  this.type.value;
    this.user.email =  this.email.value;
    this.user.password =  this.password.value;
    this.user.repeat_password = this.repeat_password.value;
    console.log('User name --> ' + this.user.name + ' User surname --> ' + this.user.surname + ' User type --> ' + this.user.type + ' User email --> ' + this.user.email + ' User password --> ' + this.user.password + ' User repeat_password --> ' + this.user.repeat_password);
  }

}