import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createActivity,getActivitySuccess,getActivityError, createActivityError,subscribeActivity,subscribeActivitySuccess,subscribeActivityError,deleteActivityError, editActivity, editActivitySuccess, editActivityError,deleteActivitySuccess, createActivitySuccess, getAllActivities, getAllActivitiesError, getAllActivitiesSuccess, deleteActivity, getActivity } from '../actions';
import { ActivityService } from '../../Services/activity.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Activity } from 'src/app/Models/activity';
import { Router } from '@angular/router';

@Injectable()
export class ActivitiesEffects {

    constructor(
        private actions$: Actions,
        private activitiesService: ActivityService,
        private router: Router
    ) { }

    getActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getAllActivities),
            mergeMap(() =>
                this.activitiesService.getActivities().pipe(
                    map((activities) => getAllActivitiesSuccess({ activities })),
                    catchError((err) => of(getAllActivitiesError({ payload: err })))
                ))
        ));

    createActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createActivity),
            mergeMap(action =>
                this.activitiesService.addActivity(action.activity).pipe(
                    map((activity) => createActivitySuccess({ activity: activity })),
                    catchError((err)=> of(createActivityError({payload: err})))
                ))
        )
    );

    deleteActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteActivity),
            mergeMap(({id}) =>
                this.activitiesService.deleteActivity(id).pipe(
                    map(() => deleteActivitySuccess({ id } )),
                    catchError((err) => of(deleteActivityError({payload: err})))
                ))
        )
    );

    editActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(editActivity),
            mergeMap(({id, activity}) =>
                this.activitiesService.updateActivity(activity).pipe(
                    map(() => editActivitySuccess({ id, activity } )),
                    catchError((err) => of(editActivityError({payload: err})))
                ))
        )
    );

    subscibeActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(subscribeActivity),
            mergeMap(({ id, activity}) =>
                this.activitiesService.updateActivity(activity ).pipe(
                    map(() => {
                        
                        this.router.navigateByUrl('/login', { skipLocationChange: true }),
                        this.router.navigateByUrl('/activityList');
                        return subscribeActivitySuccess({ id, activity })
                            
                    }),
                    catchError((err) => of(subscribeActivityError({payload: err})))
                ))
        )
    );

    getActivity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getActivity),
            mergeMap((action) =>
                this.activitiesService.getActivity(action.activity.id).pipe(
                    map((activity) => getActivitySuccess({ activity })),
                    catchError((err) => of(getActivityError({ payload: err })))
                ))
        ));
}
