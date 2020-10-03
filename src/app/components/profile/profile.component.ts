import { Component, OnInit } from '@angular/core';
import { User, Education, Languages } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../Services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  educations: Education[];
  users: User[];
  user: User;
  education: Education;

  constructor(private _global: GlobalService, private router: Router, private userService: UserService) {
    this.user = this._global.globalVar;
   }

  ngOnInit(): void {
    this.getUsers();
    if (this.user !== undefined) {
      this.getEducations();
    }
  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  getEducations(): void{
    this.educations = this.user.education;
    console.log(this.educations);
  }

  updateProfile() {
    this.router.navigateByUrl('/updateProfile');
  }

  updateEducation(education) {
    this._global.globalEducation = education;
    this.router.navigateByUrl('/updateEducation');
  }

  deleteEducation(education){
    
  }

  addEducation() {
    this.router.navigateByUrl('/updateEducation');
   }
   


  
}
