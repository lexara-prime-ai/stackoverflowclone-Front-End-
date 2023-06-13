// FILE PATHS
const logoIcon = "../../../assets/logos/web/png/logo_icon.png" as string;
const logoImage = "../../../assets/logos/web/png/logo_colored.png" as string;
const heroImage = "../../../assets/logos/web/png/logo_colored.png" as string;

// DEFAULT FORM DATA
const DEFAULT_FORM_DATA = {
  email: "Email" as string,
  password: "Password" as string,
};

// IMPORTS
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  IconDefinition,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Router, RouterModule } from "@angular/router";
import { UserService } from "src/app/shared/services/users.service";

@Component({
  selector: "sign-in",
  templateUrl: "sign-in.component.html",
  styleUrls: ["sign-in.component.css"],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, RouterModule],
})
export class SignInComponent implements OnInit {
  /* DEFAULT PROPERTIES */
  logoIcon = logoIcon;
  logoImage = logoImage;
  heroImage = heroImage;
  warningIcon: IconDefinition = faExclamationTriangle;
  SIGN_IN_FORM!: FormGroup;
  DEFAULT_FORM_DATA = DEFAULT_FORM_DATA;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.SIGN_IN_FORM = this.formBuilder.group({
      email: ["", [Validators.required, this.userService.EMAIL_PATTERN_VALIDATOR()]],
      password: ["", [Validators.required, this.userService.PASSWORD_PATTERN_VALIDATOR()]],
    });
  }

  SIGN_IN_USER() {
    // CHECK IF EMAIL = admin@admin.com
    if(this.SIGN_IN_FORM.get("email")?.value === "admin@admin.com") {
            // REDIRECT USER TO DASHBOARD AFTER 2s
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 2000);
    } else {
      // REDIRECT USER TO QA PANEL AFTER 2s
    setTimeout(() => {
      this.router.navigate(['questions']);
    }, 2000);
    }
  }
}
