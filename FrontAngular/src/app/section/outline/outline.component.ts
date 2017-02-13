import { DomSanitizer } from '@angular/platform-browser';
import { NavBarService } from '../../shared/nav-bar.service';
import { LoginUser } from '../../user/user';
import { UserResolveService } from '../../user/user-resolve.service';
import { Keymap } from '../../shared/keymap/keymap.provider';
import { ActivatedRoute } from '@angular/router';
import {
    animate,
    AnimationStyles,
    Component,
    ElementRef,
    OnInit,
    Renderer,
    SecurityContext,
    state,
    style,
    transition,
    trigger,
    ViewChild
} from '@angular/core';
import { DragulaService, dragula } from 'ng2-dragula/ng2-dragula';

// 초기값과 애니메이션에도 동일한 값을 주기 위해 클래스밖 전역변수(?)로 빼내었다.
var savedDividerWidth: number = 10;
var savedLinkFrameWidth: number = (innerWidth * 0.5) - savedDividerWidth;
var savedEditorWidth: number = innerWidth;
var savedEdiotrTransForm: string;
var savedDividerTransForm: string;
var savedEdiotrTransX: number = 0;
var savedDiveiderTransX: number = 0;
@Component({
    selector: 'outline',
    templateUrl: 'outline.component.html',
    styleUrls: ['./outline.component.css'],
    animations: [
        trigger(
            'navbarAction',
            [
                state('false', style({})),
                state('true',
                    style({ height: '99%' })),
                transition('false <=> true', animate(10))
            ]
        )

    ]
})


export class OutlineComponent implements OnInit {

    /**
     * 전반적인 클래스에 대한 주석
     * @file outline.component.ts (나중에 프로그램으로 돌릴때 필요할수도 있다고 해서)
     * @author youngtae 2017.02.09
     * @brief 화면 구성요소(에디터, 링크프레임, 탭) 을 연결하고 담는 역할.
     * @see 참고사항 해당 컴포넌트는 라우터를 통해 표현된다. 라우터에 표현되어질때 라우터 변수를 통해 서버단에서 정보를 가져온다.
     * 해당 객체는 전반적인 화면표시 내용을 객체로 나타낼것이다. 
     * @todo 추가적으로 해야할 사항
     */


    
    private inputParam: string;

    // 애니메이션 관련 변수
    private linkFrameWidth: string;
    private editorWidth: string;
    private editorTransform: string;
    private dividerWidth: string;
    private linkFrameTransform: string;
    private dividerTransform: string;
    private isActiveCrtLinkFrameBtn: boolean = false;
    private navbarAction: string = "false";
    private editorNavbarAction: string;
    private iframeOpacity: number = 0;
    private iframeHeight:string ='80vh';
    private isResized: boolean = false;

    // tab 사용 변수
    private tabUsage_link: string = "linkTab";
    private tabUsage_editor: string = "editorTab";

    //

    private testHtml  ;

    constructor(
        private route: ActivatedRoute,
        private dragulaService: DragulaService,
        private keymap: Keymap,
        private routeParam: ActivatedRoute,
        private navService: NavBarService,
        private renderer: Renderer,
        private el: ElementRef,
        private _sanitizer: DomSanitizer,
        ) {
        // 초기화 진행
        this.editorWidth = '100%';
        this.linkFrameWidth = '0px';
        this.dividerWidth = (savedDividerWidth * 2) + 'px';
        this.linkFrameTransform = 'translate3d(-10%,0,0)';
        this.navbarAction = this.navService.action + "";

    }

    /**
    * 버튼 활성화 유무에 따른 화면 분할 메소드
    * @param void
    * @returns void
    */
    public createLinkFrame(): void {
        // 화면분할
        if (this.isActiveCrtLinkFrameBtn === false) {
            this.isActiveCrtLinkFrameBtn = true;
            this.iframeOpacity = 1;


            if (!this.isResized) {
                this.editorWidth = (innerWidth * 0.5 - savedDividerWidth) + 'px';
                this.linkFrameWidth = (innerWidth * 0.5) - savedDividerWidth + 'px';

                if (this.navService.action) {
                    this.editorTransform = 'translate3d(' + (innerWidth * 0.5 + savedDividerWidth) + 'px,0,0)';
                    this.dividerTransform = 'translate3d(' + (innerWidth * 0.5 - savedDividerWidth) + 'px,0,0)';
                    this.linkFrameTransform = 'translate3d(0,0,0)';
                } else {
                    this.editorTransform = 'translate3d(' + (innerWidth * 0.5 + savedDividerWidth) + 'px,9%,0)';
                    this.dividerTransform = 'translate3d(' + (innerWidth * 0.5 - savedDividerWidth) + 'px,9%,0)';
                    this.linkFrameTransform = 'translate3d(0,9%,0)'
                }
                savedEdiotrTransX = (innerWidth * 0.5 + savedDividerWidth);
                savedDiveiderTransX = (innerWidth * 0.5 - savedDividerWidth);
            } else {
                this.editorWidth = (savedEditorWidth) + 'px';
                this.linkFrameWidth = savedLinkFrameWidth + 'px';
                this.editorTransform = savedEdiotrTransForm;
                this.dividerTransform = savedDividerTransForm;

            }

            //화면 초기화
        } else {
            this.isActiveCrtLinkFrameBtn = false;
            this.editorWidth = '100%';
            this.linkFrameWidth = '0%';
            this.iframeOpacity = 0;
            if (this.navService.action) {
                this.editorTransform = 'translate3d(0,0,0)'
                this.linkFrameTransform = 'translate3d(0,0,0)';
            } else {
                this.editorTransform = 'translate3d(0,9%,0)'
                this.linkFrameTransform = 'translate3d(0,9%,0)';
            }

        }

    }
    /**
    * 드래그로 화면 크기 조절 메소드
    * @param $event 드래그 이벤트 타입.
    * @returns void
    */

    public screenResizeStart($event: DragEvent): void {
        if (this.isResized === false) {
            this.isResized = true;
        }

        this.linkFrameWidth = ($event.x - savedDividerWidth) + 'px';
        this.editorWidth = (innerWidth - $event.x - savedDividerWidth) + 'px';
        if (!($event.x === 0)) {
            if (this.navService.action) {
                this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,0,0)';
                this.linkFrameTransform = 'translate3d(0,0,0)';
            } else {
                this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,9%,0)';
                this.linkFrameTransform = 'translate3d(0,9%,0)';
            }

        }



    }



    public screenResizeEnd($event: DragEvent) {

        this.linkFrameWidth = ($event.x - savedDividerWidth) + 'px';
        this.editorWidth = (innerWidth - $event.x - savedDividerWidth) + 'px';
        savedLinkFrameWidth = ($event.x - savedDividerWidth);
        savedEditorWidth = (innerWidth - $event.x - savedDividerWidth);
        if (this.navService.action) {
            this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,0,0)';
            savedEdiotrTransForm = this.editorTransform;
            this.dividerTransform = 'translate3d(' + ($event.x) + 'px,0,0)';
            savedDividerTransForm = this.dividerTransform;


        } else {
            this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,9%,0)';
            savedEdiotrTransForm = this.editorTransform;
            this.dividerTransform = 'translate3d(' + ($event.x) + 'px,9%,0)';
            savedDividerTransForm = this.dividerTransform;


        }

        savedEdiotrTransX = ($event.x + savedDividerWidth);
        savedDiveiderTransX = ($event.x);
    }

    //

    ngAfterContentChecked() {
        if (this.navbarAction !== this.navService.action + "") {
            this.navbarAction = this.navService.action + "";
            if (this.isActiveCrtLinkFrameBtn) {
                if (this.navService.action) {
                    this.linkFrameTransform = 'translate3d(0,0,0)';
                    this.editorTransform = 'translate3d(' + savedEdiotrTransX + 'px,0,0)';
                    savedEdiotrTransForm = this.editorTransform;
                    this.dividerTransform = 'translate3d(' + savedDiveiderTransX + 'px,0,0)';
                    this.iframeHeight = '100vh';
                } else {
                    this.linkFrameTransform = 'translate3d(0,9%,0)';
                    this.editorTransform = 'translate3d(' + savedEdiotrTransX + 'px,9%,0)';
                    savedEdiotrTransForm = this.editorTransform;
                    this.dividerTransform = 'translate3d(' + savedDiveiderTransX + 'px,9%,0)';
                    this.iframeHeight = '80vh';
                }

            } else {
                if (this.navService.action) {
                    this.editorTransform = 'translate3d(0,0,0)'
                    this.linkFrameTransform = 'translate3d(0,0,0)';
                    this.iframeHeight = '100vh';
                } else {
                    this.editorTransform = 'translate3d(0,9%,0)'
                    this.linkFrameTransform = 'translate3d(0,9%,0)';
                    this.iframeHeight = '80vh';
                }

            }



        }



    }

    /**
    * 드래그로 화면 크기 조절 메소드
    * @param $event 드래그 이벤트 타입.
    * @returns void
    */

    ngOnInit() {

        this.routeParam.data.forEach((data: { userResolveService: LoginUser }) => {
            console.log(data.userResolveService);
            //필터링을 거쳐서 넣어줄수 있겠다. 
             
            this.inputParam = this._sanitizer.sanitize(SecurityContext.HTML,data.userResolveService.email);
            // this.inputParam = data.userResolveService.email;

        });
    }



}
        // ViewChild 를 통해 dom 객체에 얼마든지 접근을 하수 있다. 다만 nativeElement 로 만들어줘야 쓸수 있다는 것. 
        // 추가적으로 Renderer를 통해 보안적 이슈까지 꼼꼼히 체크하자.
        // dragula 메소드에 dom 객체를 통과시키면 drake로 불리우는 객체가 된다. 이 객체는 드래그앤 드랍이 잘 적용이된다. 
        // dom객체가 한번 로딩 되어진 다음에 작동되어야 하므로 생명주기는 적어도 ngOnInit 단계에서 적용시켜주어야 작동된다.
        // 아래 코드는 dragula 관련 옵션을 줄수 있는 코드이다. 
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