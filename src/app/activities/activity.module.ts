import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from '../activities/activity-list/activity-list.component';
import { ActivityDetailComponent } from '../activities/activity-detail/activity-detail.component';
import { NewActivityComponent } from '../activities/new-activity/new-activity.component';
import { HomeComponent } from '../activities/home/home.component';
import { UpdateActivityComponent } from '../activities/update-activity/update-activity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityDetailComponent,
    NewActivityComponent,
    HomeComponent,
    UpdateActivityComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ActivityModule { }
