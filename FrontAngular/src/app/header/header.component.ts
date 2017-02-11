import { NavBarService } from '../shared/nav-bar.service';
import { Keymap } from '../shared/keymap/keymap.provider';
import { animate, Component, ElementRef, OnInit, state, style, transition, trigger } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    animations: [
        trigger(
            'showLoginModal',
            [
                // transform 속성은 위치의 변경을 의미한다. translate3d 함수는 x,y,z축의 움직임을 나타내는데 음수값도 허용한다. 
                // 초기에 width 와 height 값을 0으로 지정해서 보이지 않도록 한다.
                state('deActive', style({ opacity: 0, transform:'translate3d(0,0,-100%)' })),
                state('active', style({ opacity: 1 ,transform:'translate3d(0,0,100%)'})),
                transition('deActive <=> active', animate(200)),

            ]
        ),

    ]
})
export class HeaderComponent implements OnInit {

    private isShowLoginModal: string;
    
    private isHelpActive: boolean;
    constructor(private el: ElementRef, private keymap: Keymap, private navService: NavBarService) {
        this.isHelpActive = false;
        this.isShowLoginModal = 'deActive';
    }

    showLoginModal() {
        this.isShowLoginModal = (this.isShowLoginModal === 'active') ? 'deActive' : 'active';
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
        
        this.navService.navAction();
    }

    ngAfterViewInit() {


    }
}