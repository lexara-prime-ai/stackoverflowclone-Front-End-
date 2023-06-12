import * as userActions from './user.actions';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { USER_MODEL } from '../../../../shared/models/user.model';
import * as fromRoot from '../../../../state/app.state';


export interface UserState extends EntityState<USER_MODEL> {
    selectedUserId: number | null,
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState {
    users: UserState
}

export const userAdapter: EntityAdapter<USER_MODEL> = createEntityAdapter<USER_MODEL>();

export const defaultUser: UserState = {
    ids: [],
    entities: {},
    selectedUserId: null,
    loading: false,
    loaded: false,
    error: ""
}

export const initialState = userAdapter.getInitialState((defaultUser));

export function userReducer(
    state = initialState,
    action: userActions.extendedAction
): UserState {
    switch(action.type) {
        case userActions.UserActionTypes.LOAD_USERS_SUCCESS: {
            return userAdapter.addMany(action.payload, {
                ...state,
                loading: false,
                loaded: true
            })
        }
        case userActions.UserActionTypes.LOAD_USERS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

/* FEATURE SELECTORS */
const getUserFeatureState = createFeatureSelector<UserState>(
    "users"
);

export const getUsers = createSelector(
    getUserFeatureState,
    userAdapter.getSelectors().selectAll
);

export const getUsersLoading = createSelector(
    getUserFeatureState,
    (state: UserState) => state.loading
);

export const getUsersLoaded = createSelector(
    getUserFeatureState,
    (state: UserState) => state.loaded
);

export const getError = createSelector(
    getUserFeatureState,
    (state: UserState) => state.error
);