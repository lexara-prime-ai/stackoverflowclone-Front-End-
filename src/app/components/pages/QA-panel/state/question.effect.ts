import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { UserService } from "src/app/shared/services/users.service";
import * as userActions from "./question.actions";
import { QUESTION_MODEL } from "src/app/shared/models/question.model";

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService) {}

  /* GET ALL USERS */
  loadUsers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<userActions.LoadUsers>(userActions.UserActionTypes.LOAD_USERS),
      mergeMap((actions: userActions.LoadUsers) =>
        this.userService.getUsers().pipe(
          map((users: QUESTION_MODEL[]) => new userActions.LoadUsersSuccess(users)),
          catchError((err) => of(new userActions.LoadUsersFail(err)))
        )
      )
    )
  );

  /* GET SINGLE USER */
  loadUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<userActions.LoadUser>(userActions.UserActionTypes.LOAD_USER),
      mergeMap((action: userActions.LoadUser) =>
        this.userService.getUserById(action.payload).pipe(
          map((user: QUESTION_MODEL) => new userActions.LoadUserSuccess(user)),
          catchError((err) => of(new userActions.LoadUserFail(err)))
        )
      )
    )
  );

  /* CREATE USER */
  createUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<userActions.CreateUser>(userActions.UserActionTypes.CREATE_USER),
      map((action: userActions.CreateUser) => action.payload),
      mergeMap((user: QUESTION_MODEL) =>
        this.userService.createUser(user).pipe(
          map(
            (newUser: QUESTION_MODEL) => new userActions.CreateUserSuccess(newUser)
          ),
          catchError((err) => of(new userActions.CreateUserFail(err)))
        )
      )
    )
  );

  /* UPDATE USER */
  updateUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<userActions.UpdateUser>(userActions.UserActionTypes.UPDATE_USER),
      map((action: userActions.UpdateUser) => action.payload),
      mergeMap((user: QUESTION_MODEL) =>
        this.userService.updateUser(user).pipe(
          map(
            (updateUser: QUESTION_MODEL) =>
              new userActions.UpdateUserSuccess({
                id: updateUser.id,
                changes: updateUser,
              })
          ),
          catchError((err) => of(new userActions.UpdateUserFail(err)))
        )
      )
    )
  );

  /* DELETE USER */
  deleteUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<userActions.DeleteUser>(userActions.UserActionTypes.DELETE_USER),
      map((action: userActions.DeleteUser) => action.payload),
      mergeMap((id: number) =>
        this.userService.deleteUser(id).pipe(
          map(() => new userActions.DeleteUserSuccess(id)),
          catchError((err) => of(new userActions.DeleteUserFail(err)))
        )
      )
    )
  );
}
