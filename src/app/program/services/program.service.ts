import { Injectable } from '@angular/core';
import { Program } from '../entity/program';
import { ProgramGroup } from '../entity/program-group';
import { isNullOrUndefined } from 'util';
import { isEmpty } from 'rxjs/operators/isEmpty';
import { HttpClientService } from 'app/core/services/service.module';  
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of'; 
@Injectable()
export class ProgramService {

  constructor(private http:HttpClientService) { } 
  _cachePrograms:Observable<Program[]> ;
  _cacheProgramGroups:Observable<ProgramGroup[]> ;
  /**
   * searchPrograms
   */
  public searchPrograms(searchValue:string):Observable<Program[]> { 
    if (!searchValue.trim()) { 
      return of([]);
    }
    return this.getAllPrograms().map(
      programs=>{
        return programs.filter(
          (value)=>
            value.DisplayName.includes(searchValue)
            ||
            value.ID.includes(searchValue)
            || 
            value.Location.includes(searchValue) 
            || 
            value.pinYin().includes(searchValue)
        )
    }); 
  }

  /**
   * getAllPrograms
   :Array<Program>
   */
  public getAllPrograms():Observable<Program[]> {
    if (isNullOrUndefined(this._cachePrograms)) { 
      this._cachePrograms=this.http.getAll(Program,"programs");
      return this._cachePrograms;
    }else{
      return this._cachePrograms;
    } 
  } 
  
  /**
   * getProgramGroups
 :Array<ProgramGroup>  */
  public getProgramGroups():Observable<ProgramGroup[]> {
    if (isNullOrUndefined(this._cacheProgramGroups)) { 
      this._cacheProgramGroups=this.http.getAll(ProgramGroup,"programGroups"); 
    } 
    return this._cacheProgramGroups;
  } 
}
