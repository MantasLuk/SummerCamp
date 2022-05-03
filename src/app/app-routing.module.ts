import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { NatureClubComponent } from './components/nature-club/nature-club.component';
import { RegToNaturalistClubComponent } from './components/reg-to-naturalist-club/reg-to-naturalist-club.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UpdateRegistrationComponent } from './components/update-registration/update-registration.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register', component:RegisterFormComponent},
  {path: 'edit/:id', component:UpdateRegistrationComponent},
  {path: 'login', component:AuthComponent},
  {path: 'pass-change', component:ChangePasswordComponent},
  {path: 'toNatureClub', component:RegToNaturalistClubComponent},
  {path: 'naturalistClubReg', component:NatureClubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
