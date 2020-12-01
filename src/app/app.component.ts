import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './Services/global.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { logout } from '../app/logins/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,private store: Store<AppState>, private _globalService: GlobalService) { }


  title = 'Travel Agency';

  public logout(){
    this.store.dispatch(logout());
    this.router.navigate(['home']);

  }
}

