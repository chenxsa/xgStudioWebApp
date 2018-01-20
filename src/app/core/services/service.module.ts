import { NgModule, ModuleWithProviders, InjectionToken, Optional, SkipSelf, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzToolTipModule } from 'ng-zorro-antd';
 
import { HttpClientService } from './http/http.client'; 
export { HttpClientService } from './http/http.client';
import { EnvironmentService} from './environment/environment.service';
export { EnvironmentService} from './environment/environment.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule, 
    ],
    declarations: [  
    ],
    exports: [ 
    ],
    providers:[
        HttpClientService,
        EnvironmentService
    ]
})
export class XgServicesModule {  
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: XgServicesModule,
            providers: [ ]
        };
    } 
}
