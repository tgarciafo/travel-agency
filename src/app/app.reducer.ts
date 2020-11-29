import { ActionReducerMap } from '@ngrx/store';

import * as activityReducers from './activities/reducers';
import * as profileReducers from './profiles/reducers'; 
import * as loginReducers from './logins/reducers';
import * as authReducers from './logins/reducers/auth.reducer';

export interface AppState{
    activitiesApp: activityReducers.ActivityState;
    profilesApp: profileReducers.ProfileState;
    loginApp: loginReducers.LoginState;
    authApp: authReducers.AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
    activitiesApp: activityReducers.activityReducer,
    profilesApp: profileReducers.profileReducer,
    loginApp: loginReducers.loginReducer,
    authApp: authReducers.authReducer
};
