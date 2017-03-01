
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
        ),
        // linkTab 애니메이션
        trigger(
            'openLinkTab',
            [
                state('deActive', style({ transform: 'translate3d(-100px,9%,0)', opacity: 0 })),
                state('active', style({ transform: 'translate3d(0,9%,0)', opacity: 0.8 })),
                transition('deActive <=> active', animate(200)),

            ]
        ),
        // editorTab 애니메이션
        trigger(
            'openEditorTab',
            [
                state('deActive', style({ transform: 'translate3d(100px,9%,0)', opacity: 0 })),
                state('active', style({ transform: 'translate3d(0,9%,0)', opacity: 0.8 })),
                transition('deActive <=> active', animate(200)),
            ]
        )
    ]
})


export class OutlineComponent implements OnInit {

    /**
     * 전반적인 클래스에 대한 주석
     * @file outline.component.ts (나중에 프로그램으로 돌릴때 필요할수도 있다고 해서)
     * @author KimTaemin 2017.02.14
     * @brief 화면 구성요소(에디터, 링크프레임, 탭) 을 연결하고 담는 역할.
     * @see 참고사항 해당 컴포넌트는 라우터를 통해 표현된다. 라우터에 표현되어질때 라우터 변수를 통해 서버단에서 정보를 가져온다.
     * 해당 객체는 전반적인 화면표시 내용을 객체로 나타낼것이다. 
     * @todo 추가적으로 해야할 사항
     */

    private inputParam: string;



    // 애니메이션 관련 변수
    private editorFocusOutline: string;
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
    private iframeHeight: string = '90vh';
    private isResized: boolean = false;
    private linkFrameZIndex: string;
    private dividerZIndex: string;
    // tab 사용 변수
    private tabUsage_link: string = "linkTab";
    private tabUsage_editor: string = "editorTab";
    private linkTabState: string;
    private editorTabState: string;

    private testHtml;

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
        this.dividerWidth = (savedDividerWidth * 40) + 'px';
        this.navbarAction = this.navService.action + "";
        this.linkTabState = "deActive";
        this.editorTabState = "deActive";
    }

    /**
    * 버튼 활성화 유무에 따른 화면 분할 메소드
    * @param void
    * @returns void
    */
    createLinkFrame(): void {
        // 화면분할
        if (this.isActiveCrtLinkFrameBtn === false) {
            this.isActiveCrtLinkFrameBtn = true;
            this.iframeOpacity = 1;


            if (!this.isResized) {
                this.editorWidth = (innerWidth * 0.5 - savedDividerWidth) + 'px';
                this.linkFrameWidth = (innerWidth * 0.5) - savedDividerWidth + 'px';
                if (this.navService.action) {
                    this.editorTransform = 'translate3d(' + (innerWidth * 0.5 + savedDividerWidth) + 'px,0,0)';
                    this.dividerTransform = 'translate3d(' + (innerWidth * 0.45 - savedDividerWidth) + 'px,0,0)';
                    this.linkFrameTransform = 'translate3d(0,0,0)';
                } else {
                    this.editorTransform = 'translate3d(' + (innerWidth * 0.5 + savedDividerWidth) + 'px,9%,0)';
                    this.dividerTransform = 'translate3d(' + (innerWidth * 0.45 - savedDividerWidth) + 'px,9%,0)';
                    this.linkFrameTransform = 'translate3d(0,9%,0)'
                }
                savedEdiotrTransX = (innerWidth * 0.5 + savedDividerWidth);
                savedDiveiderTransX = (innerWidth * 0.45 - savedDividerWidth);
            } else {
                this.editorWidth = (savedEditorWidth) + 'px';
                this.linkFrameWidth = savedLinkFrameWidth + 'px';
                if (this.navService.action) {
                    this.editorTransform = 'translate3d(' + (savedEdiotrTransX) + 'px,0,0)';
                    this.dividerTransform = 'translate3d(' + (savedDiveiderTransX) + 'px,0,0)';
                    this.linkFrameTransform = 'translate3d(0,0,0)';
                } else {
                    this.editorTransform = 'translate3d(' + (savedEdiotrTransX) + 'px,9%,0)';
                    this.dividerTransform = 'translate3d(' + (savedDiveiderTransX) + 'px,9%,0)';
                    this.linkFrameTransform = 'translate3d(0,9%,0)'
                }

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
        this.linkFrameZIndex = '8';


        if (!($event.x === 0)) {
            if (this.navService.action) {
                this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,0,0)';
                this.linkFrameTransform = 'translate3d(0,0,0)';
                this.dividerTransform = 'translate3d(' + ($event.x - savedDividerWidth * 35) + 'px,0,0)';
                savedDividerTransForm = this.dividerTransform;

            } else {
                this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,9%,0)';
                this.linkFrameTransform = 'translate3d(0,9%,0)';
                this.dividerTransform = 'translate3d(' + ($event.x - savedDividerWidth * 35) + 'px,9%,0)';
                savedDividerTransForm = this.dividerTransform;
            }
            this.linkFrameWidth = ($event.x - savedDividerWidth) + 'px';
            this.editorWidth = (innerWidth - $event.x - savedDividerWidth) + 'px';
            savedLinkFrameWidth = ($event.x - savedDividerWidth);
            savedEditorWidth = (innerWidth - $event.x - savedDividerWidth);
            savedEdiotrTransX = ($event.x + savedDividerWidth);
            savedDiveiderTransX = ($event.x - savedDividerWidth * 35);
            console.log($event.x);
        }
    }
    public dividerClick() {
        this.dividerZIndex = '100';
    }
    public dividerDeActive() {
        this.dividerZIndex = '9';
    }


    public screenResizeEnd($event: DragEvent) {
        this.linkFrameZIndex = '10';
        this.dividerZIndex = '9';
        // this.linkFrameWidth = ($event.x - savedDividerWidth) + 'px';
        // this.editorWidth = (innerWidth - $event.x - savedDividerWidth) + 'px';
        // savedLinkFrameWidth = ($event.x - savedDividerWidth);
        // savedEditorWidth = (innerWidth - $event.x - savedDividerWidth);
        // if (this.navService.action) {
        //     this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,0,0)';
        //     savedEdiotrTransForm = this.editorTransform;
        //     this.dividerTransform = 'translate3d(' + ($event.x - savedDividerWidth * 35) + 'px,0,0)';
        //     savedDividerTransForm = this.dividerTransform;


        // } else {
        //     this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,9%,0)';
        //     savedEdiotrTransForm = this.editorTransform;
        //     this.dividerTransform = 'translate3d(' + ($event.x - savedDividerWidth * 35) + 'px,9%,0)';
        //     savedDividerTransForm = this.dividerTransform;
        //     console.log("드래그끝" + $event.x);

        // }

        // savedEdiotrTransX = ($event.x + savedDividerWidth);
        // savedDiveiderTransX = ($event.x - savedDividerWidth * 35);
    }

    //

    ngAfterContentChecked() {
        if (this.navbarAction !== this.navService.action + "") {
            this.navbarAction = this.navService.action + "";
            if (this.isActiveCrtLinkFrameBtn) {
                if (this.navService.action) {
                    this.linkFrameTransform = 'translate3d(0,0,0)';
                    this.editorTransform = 'translate3d(' + savedEdiotrTransX + 'px,0,0)';
                    this.dividerTransform = 'translate3d(' + savedDiveiderTransX + 'px,0,0)';
                    this.iframeHeight = '100vh';
                } else {
                    this.linkFrameTransform = 'translate3d(0,9%,0)';
                    this.editorTransform = 'translate3d(' + savedEdiotrTransX + 'px,9%,0)';
                    this.dividerTransform = 'translate3d(' + savedDiveiderTransX + 'px,9%,0)';
                    this.iframeHeight = '90vh';
                }

            } else {
                if (this.navService.action) {
                    this.editorTransform = 'translate3d(0,0,0)'
                    this.linkFrameTransform = 'translate3d(0,0,0)';
                    this.iframeHeight = '100vh';
                } else {
                    this.editorTransform = 'translate3d(0,9%,0)'
                    this.linkFrameTransform = 'translate3d(0,9%,0)';
                    this.iframeHeight = '90vh';
                }

            }
        }

        if(this.isActiveCrtLinkFrameBtn !== this.navService.isInput){
            this.createLinkFrame();
        }

    }

    /**
    * 드래그로 화면 크기 조절 메소드
    * @param $event 드래그 이벤트 타입.
    * @returns void
    */

    ngOnInit() {
        this.routeParam.data.forEach((data: { userResolveService: LoginUser }) => {
            this.inputParam = this._sanitizer.sanitize(SecurityContext.HTML, data.userResolveService.email);
        });
    }

    /**
    * 탭 상태 적용 메소드
    * @param void
    * @returns void
    */
    public enterLinkTab(): void {
        this.linkTabState = "active";
    }

    public leaveLinkTab(): void {
        this.linkTabState = "deActive";
    }

    public enterEditorTab(): void {
        this.editorTabState = "active";
    }

    public leaveEditorTab(): void {
        this.editorTabState = "deActive";
    }

    // drop(e:DragEvent){
    //     console.log("tttt");
    //     console.log(e);
    // }

    ngOnChanges() {
    }

    ngAfterViewInit() {
        dragula(
            [
                this.el.nativeElement.querySelector("editor"),
                this.el.nativeElement.querySelector("linkFrame")

            ],

            {
                isContainer: function (el) {
                    return el.getElementsByTagName('div'); // only elements in drake.containers will be taken into account
                },
                moves: function (el, source, handle, sibling) {
                    return true; // elements are always draggable by default
                },
                accepts: function (el, target, source, sibling) {
                    return true; // elements can be dropped in any of the `containers` by default
                },
                invalid: function (el, handle) {
                    return false; // don't prevent any drags from initiating by default
                },
                direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
                copy: false,                       // elements are moved by default, not copied
                copySortSource: false,             // elements in copy-source containers can be reordered
                revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
                removeOnSpill: false,              // spilling will `.remove` the element, if this is true
                mirrorContainer: document.body,    // set the element that gets mirror elements appended
                ignoreInputTextSelection: true     // allows users to select input text, see details below
            }
        );
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