import { Component, OnInit} from '@angular/core';
import { User } from '../../../profiles/models/user';
import { Activity } from '../../Models/activity';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  activities: Activity[];
  user: User;
  activity: Activity[];

  constructor( private store: Store<AppState>) {
    this.store.select('profilesApp').subscribe(profileResponse => {
      this.user = profileResponse.user;
    });

  }

  ngOnInit(): void {

    if (this.user !== undefined) {
      this.getMyActivities();
    }
  }

  detall(activity) {
    this.activity = activity;
}

  getMyActivities(): void{

    const saved = JSON.parse(localStorage.getItem('favorites'));

    this.activities = saved;
  }

}
