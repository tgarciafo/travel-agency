import { Injectable } from '@angular/core';
import { Education, Languages, User } from '../../views/profiles/models/user';
import { Activity } from '../../views/activities/models/activity';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public globalVar: User;

  public globalEducation: Education;

  public globalLanguage: Languages;

  public globalActivity: Activity;
 
}
