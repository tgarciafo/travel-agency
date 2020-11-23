import { ActionReducerMap } from '@ngrx/store';

import * as activityReducers from './activities/reducers';
import * as profileReducers from './profiles/reducers'; 

export interface AppState{
    activitiesApp: activityReducers.ActivityState;
    profilesApp: profileReducers.ProfileState;
}

export const appReducers: ActionReducerMap<AppState> = {
    activitiesApp: activityReducers.activityReducer,
    profilesApp: profileReducers.profileReducer
};
