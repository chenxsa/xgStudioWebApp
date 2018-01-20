import { NgModule,ModuleWithProviders } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { XgServicesModule} from '../core/services/service.module';

import { ProgramComponent } from './program.component' 
import { ProgramSearchComponent } from './components/program-search/program-search.component';
import { ProgramService}  from './services/program.service'; 
import { OpenedProgramsComponent } from './components/opened-programs/opened-programs.component';
import { ProgramTreeComponent } from './components/program-tree/program-tree.component';

export { ProgramService}  from './services/program.service';
export { Program } from './entity/program'
export { ProgramGroup } from './entity/program-group'

@NgModule({
  // imports: 数组类型的选项,我们的模块需要依赖的一些其他的模块,这样做的目的使我们这个模块
  //          可以直接使用别的模块提供的一些指令,组件等等.
  imports     : [
    NgZorroAntdModule, 
    CommonModule,
    RouterModule,
    FormsModule,  
    XgServicesModule
  ],
  // exports: 数组类型的选项,我们这个模块需要导出的一些组件,指令,模块等;
  //          如果别的模块导入了我们这个模块,
  //          那么别的模块就可以直接使用我们在这里导出的组件,指令模块等.
  exports      :[
    ProgramComponent,   
    ProgramSearchComponent,
    OpenedProgramsComponent,
    ProgramTreeComponent
  ],
 // providers: 这个选项是一个数�, OpenedProgramsComponent�, OpenedProgramsComponent,需要我们列出我们这个模块的一些需要共用的服务
 //            然后我们就可以在这个模块的各个组件中通过依赖注入使用了.
  providers: [ 
    ProgramService,
  ],
  // declarations: 数组类型的选项, 用来声明属于这个模块的指令,管道等等.
  //               然后我们就可以在这个模块中使用它们了.
  declarations: [
    ProgramComponent,  
    ProgramSearchComponent,
    OpenedProgramsComponent,
    ProgramTreeComponent
  ]
})
export class ProgramModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: ProgramModule,
        providers: [ 
          ProgramService, 
        ]
    };
  }
}
