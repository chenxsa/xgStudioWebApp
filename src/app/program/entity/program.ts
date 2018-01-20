import { PinYin } from "app/core/pinyin";

export class Program {
    ID:string;  
    DisplayName : string; 
    GroupId? : string;  
    Location?:string;
    IconName?:string;   

    public  getFullName() : string {
        return "("+this.ID+")"+this.Location+"-"+ this.DisplayName;
    }

    public pinYin():string{
       return  PinYin.ConvertPinyin(this.DisplayName);
    } 

    /**
     *
     */
    constructor() {
        this.ID = void 0;
        this.DisplayName = void 0;
        this.GroupId = void 0;
        this.IconName = void 0; 
        this.Location = void 0; 
    }
}
