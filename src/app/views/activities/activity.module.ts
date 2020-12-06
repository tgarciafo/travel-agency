import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail.component';
import { NewActivityComponent } from './components/new-activity/new-activity.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateActivityComponent } from './components/update-activity/update-activity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../../shared/Services/in-memory-data.service';

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
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  exports: [
    ActivityListComponent,
    ActivityDetailComponent,
    NewActivityComponent,
    HomeComponent,
    UpdateActivityComponent,
    FavoritesComponent
  ]
})
export class ActivityModule { }
