import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../Services/global.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { login } from '../actions/login.actions';
import { getAllUsers } from './../../profiles/actions';
import { Credentials } from 'src/app/logins/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  obj: User;
  userb: User;
  users: User[];
  public user: User = new User();

  public email: FormControl;
  public password: FormControl;
  public loginForm: FormGroup;
  private validate_email = '^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$';
  public message: string;

  constructor(private formBuilder: FormBuilder, private _globalService: GlobalService, private userService: UserService, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {

    this.email = new FormControl('', [Validators.required, Validators.pattern(this.validate_email)]);
    this.password = new FormControl('', [Validators.required]);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password

    });
    /* this.getUsers(); */
    this.store.select('profilesApp').subscribe(profileResponse => {
      this.users = profileResponse.users;
    });
    this.store.dispatch(getAllUsers());

    /* this.store.select('authApp').subscribe(authResponse => {
      this.userb = authResponse.user;
    });
    this.store.dispatch(getUserLogin({ user: this.userb })); */
 
  }

  /* getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  } */

  public async checkLogin(): Promise<void> {

    /* this.user.email =  this.email.value;
    this.user.password = this.password.value; */
    /*     const obj = this.users.find(obj => obj.email === this.user.email);
     */

    const credentials = {
      email: this.email.value,
      password: this.password.value,
    };

    this.store.dispatch(login({ credentials }));

    this.router.navigate(['activityList']);
    /* const obj = await this.userService.login(credentials); */
  }

  
    
  

}
