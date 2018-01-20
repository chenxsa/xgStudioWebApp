import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'xg-list-item-action',
    template: `<ng-template #template><ng-content></ng-content></ng-template>`
})
export class XgListItemActionComponent {

    @ViewChild('template') template: TemplateRef<any>;

}
