// FILE PATHS
const logoIcon = "../../../assets/logos/web/png/logo_icon.png" as string;
const logoBanner = "../../../assets/logos/web/png/logo_colored.png" as string;

// DEFAULT FORM DATA
const DEFAULT_FORM_DATA = {
  displayName: "Display name..." as string,
  email: "Email" as string,
  password: "Password" as string,
};

// IMPORTS
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  IconDefinition,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

import * as userActions from "../state/user.actions";
import * as fromUser from "../state/user.reducer";
import { Store } from "@ngrx/store";
import { UserService } from "src/app/shared/services/users.service";

@Component({
  selector: "sign-up",
  templateUrl: "sign-up.component.html",
  styleUrls: ["sign-up.component.css"],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, RouterModule],
})
export class SignUpComponent implements OnInit {
  /* DEFAULT PROPERTIES */
  logoIcon = logoIcon;
  logoBanner = logoBanner;
  warningIcon: IconDefinition = faExclamationTriangle;
  DEFAULT_FORM_DATA = DEFAULT_FORM_DATA;
  SIGN_UP_FORM!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private store: Store<fromUser.AppState>
  ) { }

  ngOnInit(): void {
    this.SIGN_UP_FORM = this.formBuilder.group({
      displayName: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, this.userService.EMAIL_PATTERN_VALIDATOR()],
      ],
      password: [
        "",
        [Validators.required, this.userService.PASSWORD_PATTERN_VALIDATOR()],
      ],
    });
  }

  /* CREATE USER */
  createUser() {
    const newUser: any = {
      displayName: this.SIGN_UP_FORM.get("displayName")?.value,
      email: this.SIGN_UP_FORM.get("email")?.value,
      password: this.SIGN_UP_FORM.get("password")?.value,
    };

    this.store.dispatch(new userActions.CreateUser(newUser));

    // RESET FORM
    this.SIGN_UP_FORM.reset();

    // REDIRECT TO QA PANEL
    setTimeout(() => {
      this.router.navigate(["questions"]);
    }, 2000);
  }
}
