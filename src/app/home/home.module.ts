import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  

import { ShareModule } from '../share/share.module';   
//其他模块
import { XgAppComponentsModule } from '../core/components/components.module';
import { XgAppAuthModule } from '../core/auth/anth.module';
//组件
import { HomeComponent } from './home.component';
import { HeadComponent } from './head/head.component'; 
 
import { NotifyComponent } from './head/notify/notify.component';  

//服务
import { ChartDataService } from './service/chart-data.service'; 
import { ProgramModule ,ProgramService} from '../program/program.module';
import { EnvironmentService} from '../core/services/service.module'; 


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    CommonModule, 
    RouterModule, 
    ProgramModule,
    XgAppComponentsModule,
    XgAppAuthModule.forRoot(),
    ShareModule.forRoot()
  ],
  declarations: [
    HomeComponent, 
    HeadComponent,  
   NotifyComponent,
  ],
  // exports: 数组类型的选项,我们这个模块需要导出的一些组件,指令,模块等;
  //          如果别的模块导入了我们这个模块,
  //          那么别的模块就可以直接使用我们在这里导出的组件,指令模块等.
  exports      :[
   
  ],
  providers:[
    ChartDataService, 
    ProgramService,
    EnvironmentService
  ],

})
export class HomeModule {
  
 }
