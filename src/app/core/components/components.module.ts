import { NgModule ,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share/share.module';   

import { ResultComponent} from './result/result.component';  
import { NoticeIconComponent } from './notice-icon/notice-icon.component';
import { NoticeListComponent } from './notice-icon/notice-list.component';  
import { NoticeItem } from './notice-icon/notice-item';
import {XgListComponent,XgListGrid} from './xg-list/xg-list.component';
import {XgListItemComponent} from './xg-list/xg-list-item.component';
import {XgListItemActionComponent} from './xg-list/xg-list-item-action.component';
import {XgListItemMetaComponent} from './xg-list/xg-list-item-meta.component';

export { NoticeItem } from './notice-icon/notice-item'; 
export { XgListGrid} from './xg-list/xg-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule.forRoot(), 
  ],
  declarations: [
    ResultComponent, 
    NoticeIconComponent,
    NoticeListComponent,
    XgListComponent,
    XgListItemComponent,
    XgListItemActionComponent,
    XgListItemMetaComponent,
  ],
  exports:[
    ResultComponent,
    NoticeIconComponent,
    NoticeListComponent,  
    XgListComponent,
    XgListItemComponent,
    XgListItemActionComponent,
    XgListItemMetaComponent,
  ],
  providers:[ 
  ]
})
export class XgAppComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: XgAppComponentsModule,
        providers: [  
        ]
    };
  }
}
