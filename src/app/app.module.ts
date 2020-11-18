import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';

import { ReactiveFormsModule } from '@angular/forms';

import { MessagesComponent } from './messages/messages.component';

import { LoginModule } from './logins/login.module';
import { ProfileModule } from './profiles/profile.module';
import { ActivityModule } from '../app/activities/activity.module';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './logins/reducers/login.reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { activityReducer } from './activities/reducers';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './activities/effects';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ActivityModule,
    ProfileModule,
    ReactiveFormsModule,
    EffectsModule.forRoot(EffectsArray),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
