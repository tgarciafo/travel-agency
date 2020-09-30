import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  public user: User = new User();

  public email: FormControl;
  public password: FormControl;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.email = new FormControl('');
    this.password = new FormControl('');

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password

    });
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  public checkLogin() {

    this.user.email =  this.email.value;
    this.user.password = this.password.value;
    const obj = this.users.find(obj => obj.email === this.user.email);
    if (obj.password === this.user.password) {
      console.log('Welcome ' + obj.name);
      if (obj.type === 'tourist') {
        document.getElementById('logout').style.visibility = 'visible';
        document.getElementById('home').style.visibility = 'visible';
        document.getElementById('favorites').style.visibility = 'visible';
        document.getElementById('myActivities').style.visibility = 'visible';
        document.getElementById('profile').style.visibility = 'visible';
        document.getElementById('login').style.visibility = 'hidden';
        document.getElementById('register').style.visibility = 'hidden';
      }
      else if (obj.type === 'company') {
        document.getElementById('logout').style.visibility = 'visible';
        document.getElementById('login').style.visibility = 'hidden';
        document.getElementById('register').style.visibility = 'hidden';
        document.getElementById('home').style.visibility = 'visible';
        document.getElementById('profile').style.visibility = 'visible';
        document.getElementById('admin').style.visibility = 'visible';
      }
      this.router.navigate(['activityList']);
    } else {
      alert('El password no és correcte');
    }
  }


}