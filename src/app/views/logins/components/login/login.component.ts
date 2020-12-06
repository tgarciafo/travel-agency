import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/views/profiles/models/user';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { login } from '../../actions/login.actions';

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

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {

    this.email = new FormControl('', [Validators.required, Validators.pattern(this.validate_email)]);
    this.password = new FormControl('', [Validators.required]);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password

    });
 
  }

  public checkLogin(): void {

    const credentials = {
      email: this.email.value,
      password: this.password.value,
    };

    this.store.dispatch(login({ credentials }));

  }
}
