import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './views/profiles/components/register/register.component';
import { LoginComponent } from './views/logins/components/login/login.component';
import { ActivityListComponent } from './views/activities/components/activity-list/activity-list.component';
import { ActivityDetailComponent } from './views/activities/components/activity-detail/activity-detail.component';
import { NewActivityComponent } from './views/activities/components/new-activity/new-activity.component';
import { HomeComponent } from './views/activities/components/home/home.component';
import { ProfileComponent } from './views/profiles/components/profile/profile.component';
import { UpdateProfileComponent } from './views/profiles/components/update-profile/update-profile.component';
import { UpdateEducationComponent } from './views/profiles/components/update-education/update-education.component';
import { AddEducationComponent } from './views/profiles/components/add-education/add-education.component';
import { AddLanguageComponent } from './views/profiles/components/add-language/add-language.component';
import { UpdateLanguageComponent } from './views/profiles/components/update-language/update-language.component';
import { MyActivitiesComponent } from './views/profiles/components/my-activities/my-activities.component';
import { MyActivitiesDetailsComponent } from './views/profiles/components/my-activities-details/my-activities-details.component';
import { AdminComponent } from './views/profiles/components/admin/admin.component';
import { UpdateActivityComponent } from './views/activities/components/update-activity/update-activity.component';
import { FavoritesComponent } from './views/activities/components/favorites/favorites.component';

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
