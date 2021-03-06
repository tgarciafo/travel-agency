import { Component, OnInit } from '@angular/core';
import { User, Education, Languages } from 'src/app/views/profiles/models/user';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/Services/global.service';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { addEducation, deleteEducation } from '../../actions';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  educations: Education[];
  _languages: Languages[];
  users: User[];
  user: User;
  education: Education[];
  company: boolean;
  languages: Languages;

  constructor(private router: Router, private store: Store<AppState>) {
    this.store.select('profilesApp').subscribe(profileResponse => {
      this.user = profileResponse.user;
    });
   }

  ngOnInit(): void {
    
    if (this.user !== undefined) {
      this.getEducations();
      this.getLanguages();
      this.getProfile();
    }
  }

  getProfile() {
    if (this.user.type === 'Company') {
      return this.company = true;
    } else {
      return this.company = false;
    }
  }

  getEducations(): void{
    this.store.select('profilesApp').subscribe(profileResponse => {
      this.educations = profileResponse.user.education;
    });
  }

  getLanguages(): void{
    this.store.select('profilesApp').subscribe(profileResponse => {
      this._languages = profileResponse.user.languages;
    });
  }

  addEducation() {
    this.router.navigateByUrl('/addEducation');
  }

  addLanguage() {
    this.router.navigateByUrl('/addLanguage');
   }

  updateLanguage(_language) {
    /* this._global.globalLanguage = _language; */
    this.router.navigateByUrl('/updateLanguage');
  }

  updateProfile() {
    this.router.navigateByUrl('/updateProfile');
  }

  updateEducation(education) {
    this.store.dispatch(deleteEducation(education));
    this.router.navigateByUrl('/updateEducation');
  }

  deleteLanguage(_language){
    const array = this.user.languages;

    for (let i = 0; i < array.length; i++) {
      if ((array[i].language === _language.language) && (array[i].level === _language.level)) {
        array.splice(i, 1);
      }
    }
  }

  deleteEducation(education){
    const array = this.user.education;

    for (let i = 0; i < array.length; i++) {
      if ((array[i].name === education.name) && (array[i].level === education.level)) {
        array.splice(i, 1);
      }
    }
  }

 

}
