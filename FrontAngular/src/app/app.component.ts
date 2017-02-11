import { NavBarService } from './shared/nav-bar.service';
import { Component ,trigger, state,style,transition,animate} from '@angular/core';
import './app.rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
        trigger(
            'headerFix',
            [
                // transform 속성은 위치의 변경을 의미한다. translate3d 함수는 x,y,z축의 움직임을 나타내는데 음수값도 허용한다. 
                // 초기에 width 와 height 값을 0으로 지정해서 보이지 않도록 한다.
                state('false', style({  })),
                state('true', style({transform:'translate3d(0,-99%,0)'})),
                transition('false <=> true', animate(10)),

            ]
        )

    ]
})
export class AppComponent {
  private navbarAction: string;

  constructor(private navService:NavBarService){
    this.navbarAction = "false";
  }

  ngAfterContentChecked(){
        this.navbarAction = this.navService.action+"";
    }
}
