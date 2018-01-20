import { NgModule, ModuleWithProviders, InjectionToken, Optional, SkipSelf, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzToolTipModule } from 'ng-zorro-antd';
  
import { MenuService } from './menu/menu.service';
import { ColorsService } from './colors/colors.service';
import { ScrollService } from './scroll/scroll.service';
import { SettingsService } from './settings/settings.service';
import { TitleService } from './title/title.service';
import { ThemesService } from './themes/themes.service';
import { ALAIN_I18N_TOKEN, AlainI18NServiceFake } from './i18n/i18n';
 
import { ModalHelper } from './modal/modal.helper';

const HELPERS = [ ModalHelper ];
const SERVICES = [ ColorsService, MenuService, ScrollService, SettingsService, ThemesService, TitleService ];
 
export { preloaderFinished } from './preloader/preloader';
export { MenuService, Menu } from './menu/menu.service';
export { ColorsService } from './colors/colors.service';
export { ScrollService } from './scroll/scroll.service';
export { SettingsService } from './settings/settings.service';
export { TitleService } from './title/title.service';
export { ThemesService, ThemeType } from './themes/themes.service';
export { ALAIN_I18N_TOKEN, AlainI18NService } from './i18n/i18n';
export { ModalHelper } from './modal/modal.helper';
 


const ZORROMODULES = [ NzToolTipModule ];

// endregion

export const THEME_FORROOT_GUARD = new InjectionToken<void>('THEME_FORROOT_GUARD');

export function provideForRootGuard(): any {
    if (XgServicesModule._THEME_FORROOT_GUARD) {
        throw new Error(
            `AlainThemeModule.forRoot() called twice. Lazy loaded modules should use AlainThemeModule.forChild() instead.`);
    }
    XgServicesModule._THEME_FORROOT_GUARD = true;
    return 'guarded';
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...ZORROMODULES
    ],
    declarations: [
        // ...COMPONENTS,
        // ...PIPES
    ],
    exports: [
        // ...COMPONENTS,
        // ...PIPES
    ]
})
export class XgServicesModule {
    static _THEME_FORROOT_GUARD = false;
    constructor(@Optional() @Inject(THEME_FORROOT_GUARD) guard: any) {}

    static forRoot( ): ModuleWithProviders {
        return {
            ngModule: XgServicesModule,
            providers: [ 
                { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake },
                {
                    provide: THEME_FORROOT_GUARD,
                    useFactory: provideForRootGuard
                },
                ...SERVICES,
                ...HELPERS
            ]
        };
    } 
}
