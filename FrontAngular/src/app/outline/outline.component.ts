import { animate, Component, OnInit, transition, state, style, trigger } from '@angular/core';

@Component({
    selector: 'outline',
    templateUrl: 'outline.component.html',
    styleUrls: ['./outline.component.css'],
    animations: [
        trigger(
            'createLinkFrame',
            [
                // transform 속성은 위치의 변경을 의미한다. translate3d 함수는 x,y,z축의 움직임을 나타내는데 음수값도 허용한다. 
                // 초기에 width 와 height 값을 0으로 지정해서 보이지 않도록 한다.
                state('deActive', style({ transform: 'translate3d(-100%,0,0)', width: '0px', height: '0px' })),
                state('active', style({ transform: 'translate3d(0,-100%,0)' })),
                transition('deActive <=> active', animate(500)),
                
            ]
        ),
        trigger(
            'shrinkEditorSize',
            [
                state('deActive', style({})),
                state('active', style({ transform: 'translate3d(100%,0,0)', width: '50%' })),
                transition('deActive<=>active', animate(500))
            ]
        )
    ]
})
export class OutlineComponent implements OnInit {
    state: string;
    // 링크프레임 생성 활성화 유무
    private isActiveCrtLinkFrameBtn: boolean = false;
    constructor() {
        this.state = "deActive"

        
    }
    public createLinkFrame(): void {
        if (this.isActiveCrtLinkFrameBtn == false) {
            this.isActiveCrtLinkFrameBtn = true;
            this.state = "active"
        } else {
            this.isActiveCrtLinkFrameBtn = false;
            this.state = "deActive"
        }

    }
    ngOnInit() { }


}