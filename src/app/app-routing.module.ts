import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';
import { QAPanelComponent } from './components/pages/QA-panel/QA-panel.component';
import { AdminDashboardComponent } from './components/pages/dashboard/dashboard.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "dashboard",
        component: AdminDashboardComponent
    },
    {
        path: "user-profile",
        component: UserProfileComponent
    },
    {
        path: "sign-up",
        component: SignUpComponent
    },
    {
        path: "sign-in",
        component: SignInComponent
    },
    {
        path: "reset",
        component: PasswordResetComponent
    },
    {
        path: "questions",
        component: QAPanelComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }  