import {Program} from './program';

export class ProgramGroup { 
    ID:string;  
    DisplayName : string;  
    ParentGroupId? : string;  
    Programs : Array<Program> ;
    IconName?:string;  

    /**
     *
     */
    constructor() {
        this.ID = void 0;
        this.DisplayName = void 0;
        this.ParentGroupId = void 0;
        this.IconName = void 0;
        this.Programs = void 0;
        
    }
}
