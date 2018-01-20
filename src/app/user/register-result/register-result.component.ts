import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'user-register-result',
    templateUrl: './register-result.component.html',
    styleUrls: [ './register-result.component.less' ]
})
export class RegisterResultComponent {
    constructor(public msg: NzMessageService) {}
}
