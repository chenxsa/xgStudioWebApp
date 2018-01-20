import { Component, OnInit ,Input} from '@angular/core';    
import { Observable } from 'rxjs/Observable';
import {ProgramService} from '../../services/program.service';
import { Program } from '../../entity/program';
import { ProgramGroup } from '../../entity/program-group';

@Component({
  selector: 'app-program-tree',
  templateUrl: './program-tree.component.html',
  styleUrls: ['./program-tree.component.css']
})

export class ProgramTreeComponent implements OnInit {
  //接受参数
  @Input() isCollapsed:boolean=false;

  programGroups: Observable< ProgramGroup[] >;

  constructor(public programService: ProgramService ) { }

  ngOnInit() {
    this.programGroups=this.programService.getProgramGroups();
  }

}
