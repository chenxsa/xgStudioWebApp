import { Injectable } from '@angular/core';
import { ThemeType } from '../themes/themes.service';

import { UserLayoutSettings,UserLayoutSettingsKEY } from './userSettings.interface';


@Injectable()
export class SettingsService {
 
    private _layoutSettings: UserLayoutSettings = null;

    private get(key: string) {
        try {
            return JSON.parse(localStorage.getItem(key)) || null;
        } catch (err) {
            console.warn(`invalid key: ${key}`, err);
            return null;
        }
    }

    private set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get layout(): UserLayoutSettings {
        if (!this._layoutSettings) {
            this._layoutSettings = Object.assign(<UserLayoutSettings>{
                fixed: true,
                collapsed: false,
                boxed: false,
                theme: 'A',
                lang: null,
                sidebarTheme:'light'
            }, this.get(UserLayoutSettingsKEY));
            this.set(UserLayoutSettingsKEY, this._layoutSettings);
        }
        return this._layoutSettings;
    }

    setLayout(name: string, value: any): boolean {
        if (typeof this.layout[name] !== 'undefined') {
            this.layout[name] = value;
            this.set(UserLayoutSettingsKEY, this._layoutSettings);
            return true;
        }
        return false;
    } 
 
}
