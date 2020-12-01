import { ActionReducerMap } from '@ngrx/store';

import * as activityReducers from './activities/reducers';
import * as profileReducers from './profiles/reducers'; 
import * as loginReducers from './logins/reducers';
export interface AppState{
    activitiesApp: activityReducers.ActivityState;
    profilesApp: profileReducers.ProfileState;
    loginApp: loginReducers.LoginState;
}

export const appReducers: ActionReducerMap<AppState> = {
    activitiesApp: activityReducers.activityReducer,
    profilesApp: profileReducers.profileReducer,
    loginApp: loginReducers.loginReducer
};
