import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy} from '@angular/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { ShareModule } from './share/share.module'; 
import { AppComponent } from './app.component'; 
import { ProgramModule} from './program/program.module'; 
import { HomeModule } from './home/home.module';
import { UserModule} from './user/user.module'; 

import {DashboardComponent} from './dashboard/dashboard.component';
//导入路由
import {ROUTES} from './app.routes';
//import { SimpleReuseStrategy } from './SimpleReuseStrategy';
 
@NgModule({
  // declarations: 数组类型的选项, 用来声明属于这个模块的指令,管道等等.
  //               然后我们就可以在这个模块中使用它们了.
  declarations: [
    AppComponent,  
    DashboardComponent, 
  ],
  // exports: 数组类型的选项,我们这个模块需要导出的一些组件,指令,模块等;
  //          如果别的模块导入了我们这个模块,
  //          那么别的模块就可以直接使用我们在这里导出的组件,指令模块等.
  exports:[],
  // imports: 数组类型的选项,我们的模块需要依赖的一些其他的模块,这样做的目的使我们这个模块
  //          可以直接使用别的模块提供的一些指令,组件等等.
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ProgramModule,//作业模块
    HomeModule,//主页
    UserModule,
    RouterModule.forRoot(ROUTES),  
    ShareModule.forRoot(),
  ],
  // providers: 依赖注入的核心。
  //            这个选项是一个数组,需要我们列出我们这个模块的一些需要共用的服务、共用常量等；
  //            useClass，
  //            useValue，{ provide: 'API_URL', useValue: 'http://my.api.com/v1' }
  //            useExisting，useFactory
  //            然后我们就可以在这个模块的各个组件中通过依赖注入使用了.
  providers: [
    //{ provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
