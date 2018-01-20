import { NgModule ,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';   
import { XgAppComponentsModule } from '../core/components/components.module';
import { XgAppAuthModule } from '../core/auth/anth.module';

import { UserComponent} from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component';  
import { UsercardComponent } from './usercard/usercard.component'; 
import { RegisterResultComponent } from './register-result/register-result.component';
 

import { ROUTES } from './user.routes';
import { UserManagerComponent } from './user-manager/user-manager.component'; 

@NgModule({
  imports: [
    CommonModule,
    XgAppComponentsModule,
    ShareModule.forRoot(),
    RouterModule.forChild(ROUTES),
    XgAppAuthModule.forRoot(),
  ],
  exports:[
    UserManagerComponent,    
  ],
  declarations: [
    UserComponent,
    ProfileComponent,
    LoginComponent, 
    UsercardComponent,
    RegisterComponent,
    RegisterResultComponent,
    UserManagerComponent,
  ],
  providers:[ 
  ]
})
export class UserModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: UserModule,
        providers: [  
        ], 
    };
  }
}
