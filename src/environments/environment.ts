// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  /**
  * 整个应用程序信息
 */
  App: {
    name: "xgstudio",
    description: "西瓜工作室",  
  },
  /**
   * 服务端api地址
   */
  Server:{
    APIUrl:"http://localhost:3003/"
  },
  

};
