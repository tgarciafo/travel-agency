import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public globalVar: User;

 
}
