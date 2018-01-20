 
import { NgModule ,ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';  
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule, 
        HttpClientModule,    
    ],
    exports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule, 
        HttpClientModule, 
    ]
})

export class XgAppCoreSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: XgAppCoreSharedModule,
            providers: [  
            ]
        };
    }
}
