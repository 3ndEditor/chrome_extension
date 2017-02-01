import { ActivatedRoute } from '@angular/router';
import { animate, Component, OnInit, transition, state, style, trigger } from '@angular/core';

// 초기값과 애니메이션에도 동일한 값을 주기 위해 클래스밖 전역변수(?)로 빼내었다.
let savedDividerWidth: number = 10;
let savedLinkFrameWidth: number = (innerWidth * 0.5) - savedDividerWidth;
let savedEditorWidth: number = innerWidth;

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
                state('active', style({ transform: 'translate3d(0,-100%,0)', width: savedLinkFrameWidth + 'px' })),
                transition('deActive <=> active', animate(550)),

            ]
        ),
        trigger(
            'shrinkEditorSize',
            [
                state('deActive', style({})),
                state('active',
                    style({ transform: 'translate3d(' +(innerWidth * 0.5 + savedDividerWidth) + 'px,0,0)', width: (savedEditorWidth * 0.5 - savedDividerWidth) + 'px' })),
                transition('deActive<=>active', animate(500))
            ]
        )
    ]
})
export class OutlineComponent implements OnInit {
    // 애니메이션 관련 변수
    private state: string;
    private linkFrameWidth: string;
    private editorWidth: string;
    private editorTransform: string;
    private dividerWidth: string  ;
    private linkFrameTransform: string;
    private dividerTransform: string;
    private isActiveCrtLinkFrameBtn: boolean = false;

    constructor(private route: ActivatedRoute) {
        // 초기화 진행
        this.state = "deActive"
        this.editorWidth = savedEditorWidth + 'px';
        this.linkFrameWidth = savedLinkFrameWidth + 'px';
        this.dividerWidth = (savedDividerWidth*2) + 'px' ;

    }

    // 버튼 활성화 유무에 따른 화면 분할 함수
    public createLinkFrame(): void {
        if (this.isActiveCrtLinkFrameBtn == false) {
            this.isActiveCrtLinkFrameBtn = true;
            this.state = "active"
            this.dividerTransform = 'translate3d(' + (innerWidth * 0.5 - savedDividerWidth) + 'px,0,0)';

        } else {
            this.isActiveCrtLinkFrameBtn = false;
            this.state = "deActive"
        }

    }

    // 드래그로 화면 크기 조절 함수
    public screenResizeStart($event: DragEvent): void {

        console.log($event.x+ savedDividerWidth);
        this.linkFrameWidth = ($event.x - savedDividerWidth) + 'px';
        this.editorWidth = (innerWidth - $event.x - savedDividerWidth) + 'px';
        this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth)  + 'px,0,0)';
    }

    public screenResizeEnd($event: DragEvent) {
        
        this.linkFrameWidth = ($event.x - savedDividerWidth) + 'px';
        this.editorWidth = (innerWidth - $event.x - savedDividerWidth) + 'px';
        console.log(this.editorWidth + " link " + this.linkFrameWidth);
        this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth)  + 'px,0,0)';
        this.dividerTransform = 'translate3d(' + ($event.x)  + 'px,0,0)';
    }
    // 


    ngOnInit() { }


}