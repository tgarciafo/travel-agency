import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createActivity, createActivityError,subscribeActivity,subscribeActivitySuccess,subscribeActivityError,deleteActivityError, editActivity, editActivitySuccess, editActivityError,deleteActivitySuccess, createActivitySuccess, getAllActivities, getAllActivitiesError, getAllActivitiesSuccess, deleteActivity } from '../actions';
import { ActivityService } from '../../Services/activity.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Activity } from 'src/app/Models/activity';

@Injectable()
export class ActivitiesEffects {

    constructor(
        private actions$: Actions,
        private activitiesService: ActivityService
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
                    map(() => 
                    subscribeActivitySuccess({ id, activity } )),
                    catchError((err) => of(subscribeActivityError({payload: err})))
                ))
        )
    );
}
