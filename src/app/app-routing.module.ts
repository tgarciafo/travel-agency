import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './profiles/register/register.component';
import { LoginComponent } from './logins/login/login.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivityDetailComponent } from './activities/activity-detail/activity-detail.component';
import { NewActivityComponent } from './activities/new-activity/new-activity.component';
import { HomeComponent } from './activities/home/home.component';
import { ProfileComponent } from './profiles/profile/profile.component';
import { UpdateProfileComponent } from './profiles/update-profile/update-profile.component';
import { UpdateEducationComponent } from './profiles/update-education/update-education.component';
import { AddEducationComponent } from './profiles/add-education/add-education.component';
import { AddLanguageComponent } from './profiles/add-language/add-language.component';
import { UpdateLanguageComponent } from './profiles/update-language/update-language.component';
import { MyActivitiesComponent } from './profiles/my-activities/my-activities.component';
import { MyActivitiesDetailsComponent } from './profiles/my-activities-details/my-activities-details.component';
import { AdminComponent } from './profiles/admin/admin.component';
import { UpdateActivityComponent } from './activities/update-activity/update-activity.component';
import { FavoritesComponent } from './activities/favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'activityList', component: ActivityListComponent },
  { path: 'activityDetail/:id', component: ActivityDetailComponent },
  { path: 'newActivity', component: NewActivityComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'updateProfile', component: UpdateProfileComponent },
  { path: 'updateEducation', component: UpdateEducationComponent },
  { path: 'addEducation', component: AddEducationComponent },
  { path: 'updateLanguage', component: UpdateLanguageComponent },
  { path: 'addLanguage', component: AddLanguageComponent },
  { path: 'myActivities', component: MyActivitiesComponent },
  { path: 'myActivitiesDetails', component: MyActivitiesDetailsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'updateActivity', component: UpdateActivityComponent },
  { path: 'favorites', component: FavoritesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
