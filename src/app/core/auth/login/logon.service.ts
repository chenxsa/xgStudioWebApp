import { Injectable } from '@angular/core';
import {User} from '../entity/user';
import { isNullOrUndefined } from 'util';
 
@Injectable()
/**
 * 登陆服务
 */
export class LogonService { 
  /**
  * 
  */
  constructor() { 

  }
  
  private _currentUser : User;
   
   
  /**
   * 当前登录用户 
   * @returns User
   */
  public get currentUser() : User {
    return this._currentUser;
  } 
  
  /**
   * 是否登陆
   * @returns boolean
   */
  public get isLogon() : boolean {
    return this._currentUser !==null && this._currentUser!== undefined;
  } 
  
  
  /**
   * 登陆
   * @param  {User} user
   * @param  {boolean}isMobileLogin 是否为手机登陆，如果为false则是密码登陆
   * @returns string 成功返回null，否则返回错误字符串
   */
  public logon(user:User,type:number):string { 

    if (isNullOrUndefined(user)) {
      return  `账户或密码错误`;
    }

    if (type === 0) {
      if (user.userName !== 'admin' || user.password !== '888888') { 
          return  `账户或密码错误`;
      }
    }
    this._currentUser=user;
    return null;
  }

}
