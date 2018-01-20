import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent} from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component'; 
import { RegisterResultComponent } from './register-result/register-result.component';

export const ROUTES: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'register-result', component: RegisterResultComponent }
    ]
  }
];