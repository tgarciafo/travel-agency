import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEducationComponent } from '../profiles/add-education/add-education.component';
import { AddLanguageComponent } from '../profiles/add-language/add-language.component';
import { RegisterComponent } from '../profiles/register/register.component';
import { AdminComponent } from '../profiles/admin/admin.component';
import { ProfileComponent } from '../profiles/profile/profile.component';
import { UpdateProfileComponent} from '../profiles/update-profile/update-profile.component';
import { UpdateEducationComponent } from '../profiles/update-education/update-education.component';
import { UpdateLanguageComponent } from '../profiles/update-language/update-language.component';
import { MyActivitiesComponent } from '../profiles/my-activities/my-activities.component';
import { MyActivitiesDetailsComponent } from '../profiles/my-activities-details/my-activities-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    AddEducationComponent,
    AddLanguageComponent,
    AdminComponent,
    ProfileComponent,
    UpdateProfileComponent,
    UpdateEducationComponent,
    UpdateLanguageComponent,
    MyActivitiesComponent,
    MyActivitiesDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
