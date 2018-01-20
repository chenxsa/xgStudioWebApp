import { Component, OnInit, HostBinding, Input, ElementRef, AfterViewInit } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ProgramService} from '../../services/program.service';
import { Program } from '../../entity/program';

@Component({
  selector: 'app-program-search',
  templateUrl: './program-search.component.html',
  styleUrls: ['./program-search.component.less']
})

export class ProgramSearchComponent implements OnInit {
  
  ngOnInit() {
  }

  selectedOption;
  searchOptions:Program[];

  constructor(private jsonp: Jsonp,private programService:ProgramService) {
  }

  searchChange(searchText) {
    
    // const query = encodeURI(searchText);
    // (
    //   this.jsonp.get(`https://suggest.taobao.com/sug?code=utf-8&q=${query}&callback=JSONP_CALLBACK`)
    //   .map(res => res.json()) as Observable<Response>
    // ).subscribe((data: any) => {
    //   this.searchOptions = data.result;
    // });
    this.programService.searchPrograms(searchText).subscribe(
     (data)=>{
       this.searchOptions = data;
     }
    );
  }

}
