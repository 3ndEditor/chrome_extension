import { ActivatedRoute } from '@angular/router';
import { animate, Component, ElementRef, OnInit, state, style, transition, trigger, ViewChild } from '@angular/core';
import { DragulaService, dragula } from 'ng2-dragula/ng2-dragula';

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
                    style({ transform: 'translate3d(' + (innerWidth * 0.5 + savedDividerWidth) + 'px,0,0)', width: (savedEditorWidth * 0.5 - savedDividerWidth) + 'px' })),
                transition('deActive<=>active', animate(550))
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
    private dividerWidth: string;
    private linkFrameTransform: string;
    private dividerTransform: string;
    private isActiveCrtLinkFrameBtn: boolean = false;


    constructor(private route: ActivatedRoute, private dragulaService: DragulaService) {
        // 초기화 진행
        this.state = "deActive"
        this.editorWidth = savedEditorWidth + 'px';
        this.linkFrameWidth = savedLinkFrameWidth + 'px';
        this.dividerWidth = (savedDividerWidth * 2) + 'px';

        //
        


    }

    // 버튼 활성화 유무에 따른 화면 분할 메소드
    public createLinkFrame(): void {
        if (this.isActiveCrtLinkFrameBtn == false) {
            this.isActiveCrtLinkFrameBtn = true;
            this.state = "active"
            this.dividerTransform = 'translate3d(' + (innerWidth * 0.5 - savedDividerWidth) + 'px,0,0)';
            this.editorTransform = (savedEditorWidth * 0.5 - savedDividerWidth) + 'px';

        } else {
            this.isActiveCrtLinkFrameBtn = false;
            this.state = "deActive"
        }

    }

    // 드래그로 화면 크기 조절 메소드
    public screenResizeStart($event: DragEvent): void {

        console.log($event.x + savedDividerWidth);
        this.linkFrameWidth = ($event.x - savedDividerWidth) + 'px';
        this.editorWidth = (innerWidth - $event.x - savedDividerWidth) + 'px';
        if (!($event.x === 0)) {
            this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,0,0)';
        }



    }

    public screenResizeEnd($event: DragEvent) {

        this.linkFrameWidth = ($event.x - savedDividerWidth) + 'px';
        this.editorWidth = (innerWidth - $event.x - savedDividerWidth) + 'px';
        this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,0,0)';
        this.dividerTransform = 'translate3d(' + ($event.x) + 'px,0,0)';
    }

    //



    ngOnInit() {
        // ViewChild 를 통해 dom 객체에 얼마든지 접근을 하수 있다. 다만 nativeElement 로 만들어줘야 쓸수 있다는 것. 
        // 추가적으로 Renderer를 통해 보안적 이슈까지 꼼꼼히 체크하자.
        // dragula 메소드에 dom 객체를 통과시키면 drake로 불리우는 객체가 된다. 이 객체는 드래그앤 드랍이 잘 적용이된다. 
        // dom객체가 한번 로딩 되어진 다음에 작동되어야 하므로 생명주기는 적어도 ngOnInit 단계에서 적용시켜주어야 작동된다.
        // 아래 코드는 dragula 관련 옵션을 줄수 있는 코드이다. 
        
        // console.log(this.testCmp);
        // let drake = dragula([this.testCmp.nativeElement], {
        //     isContainer: function (el) {
                
        //         return false; // only elements in drake.containers will be taken into account
        //     },
        //     moves: function (el, source, handle, sibling) {
        //         return true; // elements are always draggable by default
        //     },
        //     accepts: function (el, target, source, sibling) {
        //         return true; // elements can be dropped in any of the `containers` by default
        //     },
        //     invalid: function (el, handle) {
        //         return false; // don't prevent any drags from initiating by default
        //     },
        //     direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
        //     copy: false,                       // elements are moved by default, not copied
        //     copySortSource: false,             // elements in copy-source containers can be reordered
        //     revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
        //     removeOnSpill: false,              // spilling will `.remove` the element, if this is true
        //     mirrorContainer: document.body,    // set the element that gets mirror elements appended
        //     ignoreInputTextSelection: true     // allows users to select input text, see details below
        // });
        // this.dragulaService.add('bag-one', drake);
     }



}