import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }


  title = 'Travel Agency';

  public logout(){
    document.getElementById('logout').style.visibility = 'hidden';
    document.getElementById('register').style.visibility = 'visible';
    document.getElementById('login').style.visibility = 'visible';
    document.getElementById('admin').style.visibility = 'hidden';
    document.getElementById('profile').style.visibility = 'hidden';
    document.getElementById('myActivities').style.visibility = 'hidden';
    document.getElementById('favorites').style.visibility = 'hidden';
    document.getElementById('home').style.visibility = 'hidden';
    this.router.navigate(['home']);

  }
}

