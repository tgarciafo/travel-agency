import { Component, OnInit } from '@angular/core';
import { logout } from '../../../views/logins/actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  profileState$;

  constructor(private router: Router, private store: Store<AppState>) { 
    this.profileState$ = this.store.select('profilesApp');
  }

  title = 'Travel Agency';

  public onClickLogout(){
    this.store.dispatch(logout());
    this.router.navigate(['home']);

  }

  public onClickFavorites() {
    this.router.navigate(['favorites']);
  }

  public onClickHome() {
    this.router.navigate(['home']);
  }

  public onClickActivities() {
    this.router.navigate(['myActivities']);
  }

  public onClickAdmin() {
    this.router.navigate(['admin']);
  }

  public onClickProfile() {
    this.router.navigate(['profile']);
  }

  public onClickRegister() {
    this.router.navigate(['register']);
  }

  public onClickLogin() {
    this.router.navigate(['login']);
  }

}
