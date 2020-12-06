import { ActionReducerMap } from '@ngrx/store';

import * as activityReducers from './views/activities/reducers';
import * as profileReducers from './views/profiles/reducers';
import * as loginReducers from './views/logins/reducers';
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
