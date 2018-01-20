import { Component } from '@angular/core';

@Component({
    selector: 'user-layout',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less']
})
export class UserComponent {
    links = [
        {
            title: '帮助',
            href: ''
        },
        {
            title: '隐私',
            href: ''
        },
        {
            title: '条款',
            href: ''
        }
    ];
}
