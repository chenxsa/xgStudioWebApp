import { Component, OnInit } from '@angular/core';  
import { LogonService } from '../../core/auth/anth.module';
 
@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.less']
})

/**
 * 用户卡片，根据当前登陆的用户来显示用户名，图片等
 */
export class UsercardComponent implements OnInit {
  /**
   * 
   * @param  {LogonService} publiclogonServce
   */
  constructor(public logonServce:LogonService) {
    
  }

  ngOnInit() {
  }

}
