import { NgModule, ModuleWithProviders, InjectionToken, Optional, SkipSelf, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  
// pipes
import { MomentDatePipe } from './date/moment-date.pipe';
import { CNCurrencyPipe } from './currency/cn-currency.pipe';
import { KeysPipe } from './keys/keys.pipe';
import { YNPipe } from './yn/yn.pipe';
const PIPES = [ MomentDatePipe, CNCurrencyPipe, KeysPipe, YNPipe ];   
 
 

@NgModule({
    imports: [
        CommonModule,
        RouterModule, 
    ],
    declarations: [ 
        ...PIPES
    ],
    exports: [
        // ...COMPONENTS,
        ...PIPES
    ]
})
export class XgPipesModule {  
    
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: XgPipesModule,
            providers: [ 
            ]
        };
    } 
}
