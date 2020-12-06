import { createReducer, on } from '@ngrx/store';
import { Activity } from '../models/activity';
import {
    createActivity, getActivity, getActivityError, getActivitySuccess, editActivity,
    subscribeActivity, subscribeActivityError, subscribeActivitySuccess, editActivityError, editActivitySuccess,
    deleteActivity, deleteActivitySuccess, deleteActivityError, getAllActivities, getAllActivitiesSuccess,
    getAllActivitiesError, createActivitySuccess, createActivityError
} from '../actions/activity.actions';

export interface ActivityState{
    activities: Activity[];
    activity: Activity;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: ActivityState = {
    activities: [],
    activity: null,
    loading: false,
    loaded: false,
    error: null
};

const _activityReducer = createReducer(
    initialState,
    on(createActivity, state => ({ ...state, loading: true })),
    on(createActivitySuccess, (state, { activity }) => ({
        ...state,
        loading: false,
        loaded: true,
        activities: [...state.activities, activity]
    })),
    on(createActivityError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(editActivity,state => ({ ...state, loading: true })),
    on(editActivitySuccess, (state, { id, activity }) => ({
        ...state,
        loading: false,
        loaded: false,
        activities: [...state.activities.map((_activity) => {
            if (_activity.id === id) {
                return {
                    ...activity
                };
            } else {
                return _activity;
            }
        })]
    })),
    on(editActivityError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(deleteActivity,  state => ({ ...state, loading: true })),
    on(deleteActivitySuccess, (state, { id }) => ({
        ...state,
        loading: false,
        loaded: true,
        activities: [...state.activities.filter(activity => activity.id !== id)]
    })),
    on(deleteActivityError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(getAllActivities, state => ({ ...state, loading: true })),
    on(getAllActivitiesSuccess, (state, { activities }) => ({
        ...state,
        loading: false,
        loaded: true,
        activities: [...activities]
    })),
    on(getAllActivitiesError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(subscribeActivity, state => ({ ...state, loading: true })),
    on(subscribeActivitySuccess, (state, { id, activity }) => ({
        ...state,
        loading: false,
        loaded: true,
        activities: [...state.activities.map((_activity) => {
            if (_activity.id === id) {

                return {
                    ..._activity, peopleRegistered: _activity.peopleRegistered + 1,
                }
            } else {
                return _activity;
            }
        })]
    })),
    on(subscribeActivityError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    })),
    on(getActivity, state => ({ ...state, loading: true })),
    on(getActivitySuccess, (state, { activity } ) => ({
        ...state,
        loading: false,
        loaded: true,
        activity: activity,
    })),
    on(getActivityError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        }
    }))
)

export function activityReducer(state, action) {
    return _activityReducer(state, action);
}