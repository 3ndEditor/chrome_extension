import { setTimeout } from 'timers';
import { NavBarService } from './shared/nav-bar.service';
import { Component, trigger, state, style, transition, animate } from '@angular/core';
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
                state('false', style({})),
                state('true', style({ transform: 'translate3d(0,-99%,0)' })),
                transition('false <=> true', animate(10)),
            ]
        ),
        trigger(
            'headerMouseAction',
            [
                state('false', style({ transform: 'translate3d(0,-99%,0)'})),
                state('true', style({transform: 'translate3d(0,0%,0)'})),
                transition('false <=> true', animate(150)),
            ]
        )
    ]
})
export class AppComponent {
    /**
     * 전반적인 클래스에 대한 주석
     * @file app.component.ts 
     * @author youngtae 2017.01.23
     * @brief 최상위 Root Component 이다.
     * @see 참고사항 헤더와 라우터 아웃렛을 가지고 있다.
     * @todo 추가적으로 해야할 사항
     */

    private navbarAction: string;
    private headerMouseAction: string;
    private headerDetectorY : string;
    constructor(private navService: NavBarService) {
        this.navbarAction = "false";
        window.onbeforeunload = function (e) {
            return window.confirm("");
        };
    }

    /**
      * 상단바 에니메이션 관련 메소드
      * @param void 서비스로 주입된 NavBarService 의 boolean 값을 감지하면 애니메이션을 동작시킴.
      * @returns void
      */
    lockAction() {
        this.navbarAction = this.navService.action + "";
        // if (this.navService.action === false) {
        //     // this.headerMouseAction = "false";
        // }
    }

    headerMouseEnter() {
        if (this.navService.action === true) {
            if(!(this.headerMouseAction) || this.headerMouseAction==="false"){
                this.headerMouseAction = "true";
                this.headerDetectorY = "translate3d(0,9%,0)";
            }
        }
    }
    headerMouseLeave() {
        if (this.navService.action === true) {
            console.log(this.headerMouseAction);
           if(this.headerMouseAction==="true"){
                this.headerMouseAction = "false";
                this.headerDetectorY = "translateY(0,0,0)";
            }
        }
    }
}
