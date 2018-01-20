import { Injectable } from '@angular/core';
import { environment} from '../../../../environments/environment';
import { forEach } from '@angular/router/src/utils/collection';
@Injectable()
export class EnvironmentService {
 
    /**
   * 环境变量键值对
   * @returns string
   */
  systemParameters:{[key: string]: any}={}; 

  environment=environment;
  constructor() { 
    for(var p in this.environment){
      this.systemParameters[p.toString()]=this.environment[p.toString()];
    }
  }

  /**
   * 返回app应用名称
   * @returns string
   */
  public get appTile() : string {
    return environment.App.name;
  }

   /**
   * 返回app应用描述
   * @returns string
   */
  public get appDescription() : string {
    return environment.App.description;
  }
  
  /**
   * 返回服务端api地址
   * @returns string
   */
  public get apiUrl() : string {
    return environment.Server.APIUrl;
  }
  

  /**
   * 返回服务端对象
   * @returns any
   */
  public get server() : any {
    return environment.Server.APIUrl;
  }
  


}
