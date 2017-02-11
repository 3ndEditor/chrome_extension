import { Keymap } from '../shared/keymap/keymap.provider';
import { animate, Component, ElementRef, OnInit, state, style, transition, trigger } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    animations: [
        trigger(
            'headerFix',
            [
                // transform 속성은 위치의 변경을 의미한다. translate3d 함수는 x,y,z축의 움직임을 나타내는데 음수값도 허용한다. 
                // 초기에 width 와 height 값을 0으로 지정해서 보이지 않도록 한다.
                state('deActive', style({ height: '0' })),
                state('active', style({})),
                transition('deActive <=> active', animate(300)),

            ]
        ), trigger(
            'showLoginModal',
            [
                // transform 속성은 위치의 변경을 의미한다. translate3d 함수는 x,y,z축의 움직임을 나타내는데 음수값도 허용한다. 
                // 초기에 width 와 height 값을 0으로 지정해서 보이지 않도록 한다.
                state('deActive', style({ opacity:0 })),
                state('active', style({opacity:1})),
                transition('deActive <=> active', animate(200)),

            ]
        ),

    ]
})
export class HeaderComponent implements OnInit {

    private isShowLoginModal: string;
    private isHeaderFixed: string;
    private isHelpActive: boolean;
    constructor(private el: ElementRef, private keymap: Keymap) {
        this.isHelpActive = false;
        this.isHeaderFixed = 'active';
        this.isShowLoginModal = 'deActive';
    }

    showLoginModal() {
        this.isShowLoginModal = (this.isShowLoginModal==='active')?'deActive':'active';
    }

    ngOnInit() {

    }
    openWith() {

        document.body.webkitRequestFullScreen();

    }
    openHelp() {

        this.isHelpActive = this.isHelpActive ? false : true;
    }

    headerFix() {
        this.isHeaderFixed = this.isHeaderFixed == 'active' ? 'deActive' : 'active';
    }

    ngAfterViewInit() {


    }
}