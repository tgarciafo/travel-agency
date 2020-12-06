import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddLanguageComponent } from './components/add-language/add-language.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent} from './components/update-profile/update-profile.component';
import { UpdateEducationComponent } from './components/update-education/update-education.component';
import { UpdateLanguageComponent } from './components/update-language/update-language.component';
import { MyActivitiesComponent } from './components/my-activities/my-activities.component';
import { MyActivitiesDetailsComponent } from './components/my-activities-details/my-activities-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../../shared/Services/in-memory-data.service';

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
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ]
})
export class ProfileModule { }
