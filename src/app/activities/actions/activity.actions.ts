import { createAction, props } from '@ngrx/store';
import { Activity } from '../../Models/activity';

export const createActivity = createAction(
    '[ACTIVITY] Create Activity',
    props<{ activity: Activity }>()
);

export const createActivitySuccess = createAction(
    '[ACTIVITY] Create Activity success',
    props<{ activity: Activity }>()
);
export const createActivityError = createAction(
    '[ACTIVITY] Create Activity error',
    props<{payload: any}>()
);

export const editActivity = createAction(
    '[ACTIVITY] Edit Activity',
    props<{ id: number, activity: Activity }>()
);

export const editActivitySuccess = createAction(
    '[ACTIVITY] Edit Activity Success',
    props<{ id: number, activity: Activity }>()
);

export const editActivityError = createAction(
    '[ACTIVITY] Edit Activity Error',
    props<{ payload: any }>()
);

export const deleteActivity = createAction(
    '[ACTIVITY] Delete Activity',
    props<{ id:number }>()
);

export const deleteActivitySuccess = createAction(
    '[ACTIVITY] Delete Activity Success',
    props<{ id:number }>()
);

export const deleteActivityError = createAction(
    '[ACTIVITY] Delete Activity Error',
    props<{ payload:any }>()
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

export const getActivity = createAction(
    '[ACTIVITY] Get activity',
props<{ activity: Activity }>());

export const getActivitySuccess = createAction(
    '[ACTIVITY] Get activity success',
    props<{ activity: Activity }>()
);

export const getActivityError = createAction(
    '[ACTIVITY] Get activity error',
    props<{payload: any}>()
);

export const subscribeActivity = createAction(
    '[ACTIVITY] Subscribe Activity',
    props<{ id:number, activity: Activity }>()
);

export const subscribeActivitySuccess = createAction(
    '[ACTIVITY] Subscribe Activity Success',
    props<{ id:number, activity: Activity }>()
);

export const subscribeActivityError = createAction(
    '[ACTIVITY] Subscribe Activity Error',
    props<{ payload: any }>()
);
