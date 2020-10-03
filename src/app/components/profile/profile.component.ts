import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: User[];

  public user: User = new User();


  public name: FormControl;
  public surname: FormControl;
  public birthdate: FormControl;
  public phone: FormControl;
  public nationality: FormControl;
  public nif: FormControl;
  public about: FormControl;
  public profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService ) { }

  ngOnInit(): void {

    this.name = new FormControl('');
    this.surname = new FormControl('');
    this.birthdate = new FormControl('');
    this.phone = new FormControl('');
    this.nationality = new FormControl('');
    this.nif = new FormControl('');
    this.about = new FormControl('');

    this.profileForm = this.formBuilder.group({
      name: this.name,
      surname: this.surname,
      birthdate: this.birthdate,
      phone: this.phone,
      nationality: this.nationality,
      nif: this.nif,
      about: this.about
    });
    this.getUsers();
    

  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  updateProfile(){
    /* this.userService.patchUser(this.profileForm.vale as User)
      .subscribe(console.log());
    } */
  }
}
