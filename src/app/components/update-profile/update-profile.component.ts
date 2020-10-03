import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

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

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private _global: GlobalService) { 
    this.user = this._global.globalVar;
  }

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
      birthDate: this.birthdate,
      phone: this.phone,
      nationality: this.nationality,
      nif: this.nif,
      aboutMe: this.about
    });
    this.getUsers();
    

  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  updateProfile() {
    const form = this.profileForm.value as User;
    this.user.name = form.name;
    this.user.surname = form.surname;
    this.user.birthDate = form.birthDate;
    this.user.phone = form.phone;
    this.user.nationality = form.nationality;
    this.user.nif = form.nif;
    this.user.aboutMe = form.aboutMe;
    this.router.navigateByUrl('/profile');

  }
}

