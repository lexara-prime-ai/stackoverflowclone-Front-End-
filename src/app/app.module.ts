// THIS FILE CONTAINS THE CORE
// CONFIGURATION FOR THE APP
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./components/pages/sign-up/sign-up.component";
import { SignInComponent } from "./components/pages/sign-in/sign-in.component";
import { RouterModule } from "@angular/router";
import { NgModel } from "@angular/forms";
import { PasswordResetComponent } from "./components/pages/password-reset/password-reset.component";
import { AppRoutingModule } from "./app-routing.module";
import { QAPanelComponent } from "./components/pages/QA-panel/QA-panel.component";
import { AskQuestionComponent } from "./components/pop-ups/questions/ask-question/ask-question.component";
import { EditQuestionComponent } from "./components/pop-ups/questions/edit-question/edit-question.component";
import { AdminDashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { UserProfileComponent } from "./components/pages/user-profile/user-profile.component";

// THE NgModule DECORATOR INDICATES THAT
//THIS FILE IS A MODULE
// THIS DECORATOR CONTAINS METADATA WHICH
// DENOTES ALL RELEVANT AND NECESSARY
// DEPENDENCIES
@NgModule({
  // MARK OUT WHICH COMPONENTS AND
  // DIRECTIVES CAN BE USED WITHIN THE
  // APP
  declarations: [AppComponent],
  providers: [NgModel],
  // THE ENTRY POINT COMPONENT FOR
  // STARTING THE APP
  bootstrap: [AppComponent],
  imports: [
    SignUpComponent,
    SignInComponent,
    PasswordResetComponent,
    QAPanelComponent,
    AskQuestionComponent,
    EditQuestionComponent,
    AdminDashboardComponent,
    UserProfileComponent,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
  ],
})
export class AppModule { }
