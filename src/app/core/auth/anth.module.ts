import { NgModule ,ModuleWithProviders} from '@angular/core';
import { XgAppCoreSharedModule } from '../shared.module';

import {LogonService} from './login/logon.service';

export {User} from './entity/user';
export {LogonService} from './login/logon.service';

@NgModule({
  imports: [
    XgAppCoreSharedModule.forRoot(), 
  ],
  declarations: [ 
     
  ],
  exports:[ 
  ],
  providers:[ 
    LogonService
  ]
})
export class XgAppAuthModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: XgAppAuthModule,
        providers: [   
        ]
    };
  }
}
