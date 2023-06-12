import { Action } from '@ngrx/store';

import { Update } from '@ngrx/entity';

import { USER_MODEL } from "../../../../shared/models/user.model";

/* USER ACTION TYPES */
export enum UserActionTypes {
    LOAD_USERS = '[User] Load Users',
    LOAD_USERS_SUCCESS = '[User] Load Users Success',
    LOAD_USERS_FAIL = '[User] Load Users Fail'
}

/* LOAD USER CLASSES */
export class LoadUsers implements Action {
    readonly type = UserActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
    readonly type = UserActionTypes.LOAD_USERS_SUCCESS;

    constructor(public payload: USER_MODEL[]) { }
}

export class LoadUsersFail implements Action {
    readonly type = UserActionTypes.LOAD_USERS_FAIL;

    constructor(public payload: string) { }
}

// EXPORT EXTENDED ACTION
export type extendedAction = LoadUsers | LoadUsersSuccess | LoadUsersFail;