import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckWord } from 'src/app/Directives/check-word.validator';
import { checkEquality } from 'src/app/Directives/check-equality.validator';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: User[];

  public user: User = new User();

  public name: FormControl;
  public surname: FormControl;
  public type: FormControl;
  public email: FormControl;
  public password: FormControl;
  public repeat_password: FormControl;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

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
    this.getUsers();

  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  checkRegister() {
    this.userService.addUser(this.registerForm.value as User)
      .subscribe(user => {
        this.users.push(user);
        console.log('Successfully logged in');
        this.router.navigate(['login']);
      });
  }

}