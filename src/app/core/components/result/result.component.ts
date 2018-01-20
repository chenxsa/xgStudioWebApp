import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
    selector: 'result',
    templateUrl: './result.component.html',
    styleUrls: [ './result.component.less' ]
})
export class ResultComponent {

    // region: fields

    _type = '';
    _icon = '';
    @Input()
    set type(value: string) {
        this._type = value;
        switch (value) {
            case 'success':
                this._icon = 'check-circle';
                break;
            case 'error':
                this._icon = 'close-circle';
                break;
            default:
                this._icon = value;
                break;
        }
    }

    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set title(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;
    }

    _description = '';
    _descriptionTpl: TemplateRef<any>;
    @Input()
    set description(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._descriptionTpl = value;
        else
            this._description = value;
    }

    _extra = '';
    _extraTpl: TemplateRef<any>;
    @Input()
    set extra(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._extraTpl = value;
        else
            this._extra = value;
    }

    // endregion
}
