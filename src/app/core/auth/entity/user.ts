/**
 * 用户
 */
export interface User {
    /**
     * 名称
     */
    userName?: string;
    displayName?: string;
    password?:string;
    avatar?:string;
    email?: string;
    code?:string; 
    mobile?:string;
    captchar?:string;
    [key: string]: any;
}
 