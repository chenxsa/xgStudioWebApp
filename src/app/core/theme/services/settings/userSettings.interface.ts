import { ThemeType } from '../themes/themes.service'; 
 
export const UserLayoutSettingsKEY = 'UserLayoutSettingsKEY'; 

export interface UserLayoutSettings {
    /** 是否固定顶部菜单 */
    fixed: boolean;
    /** 是否折叠右边菜单 */
    collapsed: boolean;
    /** 是否固定宽度 */
    boxed: boolean;
    /** 当前主题 */
    theme: ThemeType;
    /** 语言环境 */
    lang: string; 
    /**
     * 导航主题 'light' | 'dark';
     */
    sidebarTheme:string;
}
