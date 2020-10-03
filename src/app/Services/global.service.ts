import { Injectable } from '@angular/core';
import { Education, User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public globalVar: User;

  public globalEducation: Education;

 
}
