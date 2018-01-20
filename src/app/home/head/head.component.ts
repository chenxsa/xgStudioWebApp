import { Component, OnInit } from '@angular/core';
import { EnvironmentService} from '../../core/services/service.module';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less'],  
})
export class HeadComponent implements OnInit {
  searchToggleStatus: boolean;
  constructor(public environmentService: EnvironmentService ) { }

  ngOnInit() {

  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }


}
