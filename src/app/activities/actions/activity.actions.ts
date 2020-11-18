import { createAction, props } from '@ngrx/store';
import { Activity } from '../../Models/activity';

export const createActivity = createAction(
    '[ACTIVITY] Create Activity',
    props<{ activity: Activity }>()
);

export const editActivity = createAction(
    '[ACTIVITY] Edit Activity',
    props<{ _activity: Activity }>()
);

export const deleteActivity = createAction(
    '[ACTIVITY] Delete Activity',
    props<{ id:number }>()
);

export const getAllActivities = createAction('[ACTIVITY] Get all');

export const getAllActivitiesSuccess = createAction(
    '[ACTIVITY] Get all success',
    props<{ activities: Activity[] }>()
);

export const getAllActivitiesError = createAction(
    '[ACTIVITY] Get all error',
    props<{payload: any}>()
);