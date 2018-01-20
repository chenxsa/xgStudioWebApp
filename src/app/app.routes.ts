import { Routes, RouterModule} from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';   
import { UserManagerComponent } from './user/user-manager/user-manager.component'; 
import {DashboardComponent} from './dashboard/dashboard.component';

//根路由
export const ROUTES: Routes = [  
    { 
      path: 'app',
      component: HomeComponent,
      data: { title: 'Home' },
      children:[ 
        { path: 'userManager',  component: UserManagerComponent,data: { title: 'UserManager' }   }, 
        { path: 'dashboard',  component: DashboardComponent  ,data: { title: 'Dashboard' }},  
      ],
    
    }, 
    // {
    //     path: 'user', 
    //     loadChildren: './user/user.module#UserModule'
    // },
   
   { path: '**', redirectTo: 'app' }
  ];