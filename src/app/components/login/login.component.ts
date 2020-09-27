import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  public email: FormControl;
  public password: FormControl;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.email = new FormControl('');
    this.password = new FormControl('');

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password

    });
  }
  public checkLogin() {
  
    this.user.email =  this.email.value;
    this.user.password =  this.password.value;
    console.log(' User email --> ' + this.user.email + ' User password --> ' + this.user.password);
  }


}