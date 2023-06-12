import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UserService } from 'src/app/shared/services/users.service';
import * as userActions from './user.actions';
import { USER_MODEL } from 'src/app/shared/models/user.model';

@Injectable()
export class UserEffect {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    /* GET ALL USERS */
    loadUsers$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType<userActions.LoadUsers>(
                userActions.UserActionTypes.LOAD_USERS
            ),
            mergeMap((actions: userActions.LoadUsers) =>
                this.userService.getUsers().pipe(
                    map(
                        (users: USER_MODEL[]) =>
                            new userActions.LoadUsersSuccess(users)
                    ),
                    catchError(err => of(new userActions.LoadUsersFail(err)))
                )
            )
        )
    )

}