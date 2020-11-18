import { ActionReducerMap } from '@ngrx/store';

import * as reducers from './activities/reducers';

export interface AppState{
    activitiesApp: reducers.ActivityState;
}

export const appReducers: ActionReducerMap<AppState> = {
    activitiesApp: reducers.activityReducer
};
