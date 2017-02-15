webpackJsonp([0,4],{

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Keymap; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return KeymapProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Keymap = (function () {
    function Keymap() {
    }
    Keymap = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], Keymap);
    return Keymap;
}());
var customKeymap = {
    help_key: 112,
    wide_key: 87,
    create_frame_key: 83,
    header_fixed_key: 69 //e
};
var KeymapProvider = {
    provide: Keymap,
    useValue: customKeymap
};
// 값제공자는 상위 모듈에서 한번만 주입하면 그 하위 모듈들도 전부 이용가능하다 
// 이용하는 방법은 그 타입을 가지고 있는 변수를 컴포넌트가 가지고 있기만 하면 자동주입이다.  
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/keymap.provider.js.map

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavBarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarService = (function () {
    function NavBarService() {
        this.action = false;
    }
    NavBarService.prototype.navAction = function () {
        this.action = this.action === false ? true : false;
    };
    NavBarService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], NavBarService);
    return NavBarService;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/nav-bar.service.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_nav_bar_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_keymap_keymap_provider__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(el, renderer, keymap, navService) {
        this.el = el;
        this.renderer = renderer;
        this.keymap = keymap;
        this.navService = navService;
        /**
         * 전반적인 클래스에 대한 주석
         * @file header.component.ts
         * @author youngtae 2017.02.01
         * @brief 상단바 관련 컴포넌트이다.
         * @see 참고사항
         * @todo 추가적으로 해야할 사항
         */
        this.lockAction = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.isHelpActive = false;
        this.isShowLoginModal = 'deActive';
    }
    HeaderComponent.prototype.showLoginModal = function () {
        this.isShowLoginModal = (this.isShowLoginModal === 'active') ? 'deActive' : 'active';
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openWith = function () {
        document.body.webkitRequestFullScreen();
    };
    HeaderComponent.prototype.openHelp = function () {
        this.isHelpActive = this.isHelpActive ? false : true;
    };
    HeaderComponent.prototype.headerFix = function () {
        this.navService.navAction();
        this.lockAction.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], HeaderComponent.prototype, "lockAction", void 0);
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'header',
            template: __webpack_require__(744),
            styles: [__webpack_require__(729)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["trigger"])('showLoginModal', [
                    // transform 속성은 위치의 변경을 의미한다. translate3d 함수는 x,y,z축의 움직임을 나타내는데 음수값도 허용한다. 
                    // 초기에 width 와 height 값을 0으로 지정해서 보이지 않도록 한다.
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('deActive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ opacity: 0, transform: 'translateX(100%)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('deActive <=> active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])(200)),
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_keymap_keymap_provider__["a" /* Keymap */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_keymap_keymap_provider__["a" /* Keymap */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_nav_bar_service__["a" /* NavBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_nav_bar_service__["a" /* NavBarService */]) === 'function' && _d) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/header.component.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InvalidUrlPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvalidUrlPageComponent = (function () {
    function InvalidUrlPageComponent() {
        this.alertMsg = "잘못된 경로입니다.";
    }
    InvalidUrlPageComponent.prototype.ngOnInit = function () {
    };
    InvalidUrlPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'invalid-url-page',
            template: "\n       <h1> {{alertMsg}} </h1>\n       \n       <a routerLink=\"\">\uB3CC\uC544\uAC00\uAE30</a>\n    \n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], InvalidUrlPageComponent);
    return InvalidUrlPageComponent;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/invalid-url-page.component.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__async_handling_promise__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LinkFrameService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinkFrameService = (function () {
    function LinkFrameService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    // 클라이언트쪽에서 직접 웹 자료를 긁으려고 했으나 라이브러리가 있는지도 모르겠고,,, 실패! 비동기 json 데이터는 가져 올수 있을 것 같다.
    LinkFrameService.prototype.connectUrl = function (inputUrl) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        //params.set('search', 'korea');
        // params.set('action', 'opensearch');
        return this.http
            .get(inputUrl)
            .map(this.extractData)
            .catch(__WEBPACK_IMPORTED_MODULE_0__async_handling_promise__["a" /* handleError */]);
    };
    // connectUrl(inputUrl: string):void {
    //     var request = require('request');
    //     request(inputUrl, function (error, response, body) {
    //         if (!error && response.statusCode == 200) {
    //             console.log(body) // Show the HTML for the Google homepage. 
    //         }
    //     })
    // }
    // connectUrl(inputUrl:string):Promise<any>{
    //     return this.http.get(inputUrl)
    //     .toPromise()
    //     .then(this.extractData);
    // }
    LinkFrameService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    LinkFrameService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _b) || Object])
    ], LinkFrameService);
    return LinkFrameService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/linkFrame.service.promise.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_nav_bar_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_keymap_keymap_provider__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OutlineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// 초기값과 애니메이션에도 동일한 값을 주기 위해 클래스밖 전역변수(?)로 빼내었다.
var savedDividerWidth = 10;
var savedLinkFrameWidth = (innerWidth * 0.5) - savedDividerWidth;
var savedEditorWidth = innerWidth;
var savedEdiotrTransForm;
var savedDividerTransForm;
var savedEdiotrTransX = 0;
var savedDiveiderTransX = 0;
var OutlineComponent = (function () {
    function OutlineComponent(route, dragulaService, keymap, routeParam, navService, renderer, el, _sanitizer) {
        this.route = route;
        this.dragulaService = dragulaService;
        this.keymap = keymap;
        this.routeParam = routeParam;
        this.navService = navService;
        this.renderer = renderer;
        this.el = el;
        this._sanitizer = _sanitizer;
        this.isActiveCrtLinkFrameBtn = false;
        this.navbarAction = "false";
        this.iframeOpacity = 0;
        this.iframeHeight = '80vh';
        this.isResized = false;
        // tab 사용 변수
        this.tabUsage_link = "linkTab";
        this.tabUsage_editor = "editorTab";
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
    OutlineComponent.prototype.createLinkFrame = function () {
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
                }
                else {
                    this.editorTransform = 'translate3d(' + (innerWidth * 0.5 + savedDividerWidth) + 'px,9%,0)';
                    this.dividerTransform = 'translate3d(' + (innerWidth * 0.45 - savedDividerWidth) + 'px,9%,0)';
                    this.linkFrameTransform = 'translate3d(0,9%,0)';
                }
                savedEdiotrTransX = (innerWidth * 0.5 + savedDividerWidth);
                savedDiveiderTransX = (innerWidth * 0.45 - savedDividerWidth);
            }
            else {
                this.editorWidth = (savedEditorWidth) + 'px';
                this.linkFrameWidth = savedLinkFrameWidth + 'px';
                if (this.navService.action) {
                    this.editorTransform = 'translate3d(' + (savedEdiotrTransX) + 'px,0,0)';
                    this.dividerTransform = 'translate3d(' + (savedDiveiderTransX) + 'px,0,0)';
                    this.linkFrameTransform = 'translate3d(0,0,0)';
                }
                else {
                    this.editorTransform = 'translate3d(' + (savedEdiotrTransX) + 'px,9%,0)';
                    this.dividerTransform = 'translate3d(' + (savedDiveiderTransX) + 'px,9%,0)';
                    this.linkFrameTransform = 'translate3d(0,9%,0)';
                }
            }
        }
        else {
            this.isActiveCrtLinkFrameBtn = false;
            this.editorWidth = '100%';
            this.linkFrameWidth = '0%';
            this.iframeOpacity = 0;
            if (this.navService.action) {
                this.editorTransform = 'translate3d(0,0,0)';
                this.linkFrameTransform = 'translate3d(0,0,0)';
            }
            else {
                this.editorTransform = 'translate3d(0,9%,0)';
                this.linkFrameTransform = 'translate3d(0,9%,0)';
            }
        }
    };
    /**
    * 드래그로 화면 크기 조절 메소드
    * @param $event 드래그 이벤트 타입.
    * @returns void
    */
    OutlineComponent.prototype.screenResizeStart = function ($event) {
        if (this.isResized === false) {
            this.isResized = true;
        }
        this.linkFrameZIndex = '8';
        this.linkFrameWidth = ($event.x - savedDividerWidth) + 'px';
        this.editorWidth = (innerWidth - $event.x - savedDividerWidth) + 'px';
        if (!($event.x === 0)) {
            if (this.navService.action) {
                this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,0,0)';
                this.linkFrameTransform = 'translate3d(0,0,0)';
                this.dividerTransform = 'translate3d(' + ($event.x - savedDividerWidth * 35) + 'px,0,0)';
                savedDividerTransForm = this.dividerTransform;
            }
            else {
                this.editorTransform = 'translate3d(' + ($event.x + savedDividerWidth) + 'px,9%,0)';
                this.linkFrameTransform = 'translate3d(0,9%,0)';
                this.dividerTransform = 'translate3d(' + ($event.x - savedDividerWidth * 35) + 'px,9%,0)';
                savedDividerTransForm = this.dividerTransform;
            }
            savedLinkFrameWidth = ($event.x - savedDividerWidth);
            savedEditorWidth = (innerWidth - $event.x - savedDividerWidth);
            savedEdiotrTransX = ($event.x + savedDividerWidth);
            savedDiveiderTransX = ($event.x - savedDividerWidth * 35);
            console.log($event.x);
        }
    };
    OutlineComponent.prototype.dividerClick = function () {
        this.dividerZIndex = '100';
    };
    OutlineComponent.prototype.dividerDeActive = function () {
        this.dividerZIndex = '10';
    };
    OutlineComponent.prototype.screenResizeEnd = function ($event) {
        this.linkFrameZIndex = '10';
        this.dividerZIndex = '10';
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
    };
    //
    OutlineComponent.prototype.ngAfterContentChecked = function () {
        if (this.navbarAction !== this.navService.action + "") {
            this.navbarAction = this.navService.action + "";
            if (this.isActiveCrtLinkFrameBtn) {
                if (this.navService.action) {
                    this.linkFrameTransform = 'translate3d(0,0,0)';
                    this.editorTransform = 'translate3d(' + savedEdiotrTransX + 'px,0,0)';
                    this.dividerTransform = 'translate3d(' + savedDiveiderTransX + 'px,0,0)';
                    this.iframeHeight = '100vh';
                }
                else {
                    this.linkFrameTransform = 'translate3d(0,9%,0)';
                    this.editorTransform = 'translate3d(' + savedEdiotrTransX + 'px,9%,0)';
                    this.dividerTransform = 'translate3d(' + savedDiveiderTransX + 'px,9%,0)';
                    this.iframeHeight = '80vh';
                }
            }
            else {
                if (this.navService.action) {
                    this.editorTransform = 'translate3d(0,0,0)';
                    this.linkFrameTransform = 'translate3d(0,0,0)';
                    this.iframeHeight = '100vh';
                }
                else {
                    this.editorTransform = 'translate3d(0,9%,0)';
                    this.linkFrameTransform = 'translate3d(0,9%,0)';
                    this.iframeHeight = '80vh';
                }
            }
        }
    };
    /**
    * 드래그로 화면 크기 조절 메소드
    * @param $event 드래그 이벤트 타입.
    * @returns void
    */
    OutlineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParam.data.forEach(function (data) {
            console.log(data.userResolveService);
            _this.inputParam = _this._sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_4__angular_core__["SecurityContext"].HTML, data.userResolveService.email);
        });
    };
    /**
    * 탭 상태 적용 메소드
    * @param void
    * @returns void
    */
    OutlineComponent.prototype.enterLinkTab = function () {
        this.linkTabState = "active";
    };
    OutlineComponent.prototype.leaveLinkTab = function () {
        this.linkTabState = "deActive";
    };
    OutlineComponent.prototype.enterEditorTab = function () {
        this.editorTabState = "active";
    };
    OutlineComponent.prototype.leaveEditorTab = function () {
        this.editorTabState = "deActive";
    };
    OutlineComponent.prototype.ngOnChanges = function () {
    };
    OutlineComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'outline',
            template: __webpack_require__(749),
            styles: [__webpack_require__(735)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["trigger"])('navbarAction', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["state"])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["style"])({})),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["state"])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["style"])({ height: '99%' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["transition"])('false <=> true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["animate"])(10))
                ]),
                // linkTab 애니메이션
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["trigger"])('openLinkTab', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["state"])('deActive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["style"])({ transform: 'translate3d(-100px,9%,0)', opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["style"])({ transform: 'translate3d(0,9%,0)', opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["transition"])('deActive <=> active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["animate"])(200)),
                ]),
                // editorTab 애니메이션
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["trigger"])('openEditorTab', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["state"])('deActive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["style"])({ transform: 'translate3d(100px,9%,0)', opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["style"])({ transform: 'translate3d(0,9%,0)', opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["transition"])('deActive <=> active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["animate"])(200)),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__["DragulaService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__["DragulaService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_keymap_keymap_provider__["a" /* Keymap */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_keymap_keymap_provider__["a" /* Keymap */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_nav_bar_service__["a" /* NavBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_nav_bar_service__["a" /* NavBarService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_core__["Renderer"]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _h) || Object])
    ], OutlineComponent);
    return OutlineComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
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
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/outline.component.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionComponent = (function () {
    /**
     * 전반적인 클래스에 대한 주석
     * @file app.component.ts
     * @author youngtae 2017.02.09
     * @brief router를 통해 필요한 정보들을 불러올수 있는 특수한 용도의 컴포넌트이다.
     * @see 라우터 아웃렛만을 가지고 있으며 여러 가드들과 함께 조건 동작을 수행한다.
     * @todo 추가적으로 해야할 사항
     */
    function SectionComponent() {
    }
    SectionComponent.prototype.ngOnInit = function () {
    };
    SectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'section',
            template: "\n    <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SectionComponent);
    return SectionComponent;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/section.component.js.map

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserResolveService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserResolveService = (function () {
    function UserResolveService(loginUserService, router) {
        this.loginUserService = loginUserService;
        this.router = router;
    }
    UserResolveService.prototype.resolve = function (route) {
        var _this = this;
        var loginUserName = route.params['loginUserName'];
        // return Promise.resolve(new LoginUser('kim','kim@editor.com')).then(user=>{return user});
        return this.loginUserService.findByName(loginUserName).then(function (user) {
            if (user) {
                return user;
            }
            else {
                _this.router.navigate(['dd']);
                return false;
            }
        });
    };
    UserResolveService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user__["a" /* LoginUserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user__["a" /* LoginUserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], UserResolveService);
    return UserResolveService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/user-resolve.service.js.map

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export LoginUser */
/* unused harmony export userPromise */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginUserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoginUser = (function () {
    function LoginUser(name, email) {
        this.name = name;
        this.email = email;
    }
    return LoginUser;
}());
// 테스트용 목객체 데이터
var LOGINUSERS = [
    new LoginUser('index', "\n        <div class=\"center-align container\"> \n        <img  src=\"assets/image/Logo_3ndEditor.png\" />\n         <p>   \uBCF4\uB2E4 \uBE60\uB974\uACE0 , \uAC04\uD3B8\uD558\uAC8C \uB9AC\uC11C\uCE6D\uC744 \uB3C4\uC640\uC8FC\uB294 \uB3C4\uAD6C </p>\n         <p>   3ndEdiotr\uB294 \uAC04\uB2E8\uD55C \uBB38\uC11C\uB97C \uB9CC\uB4DC\uB294\uB370 \uB9E4\uC6B0 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4! </p>\n         <p>   \uC5B8\uC81C, \uC5B4\uB514\uC5D0\uC11C\uB098 \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4! </p>\n        <div>\n        \n    \n    "),
    new LoginUser('kim', 'kim@editor.com'),
    new LoginUser('lee', 'lee@editor.com'),
    new LoginUser('park', 'park@editor.com'),
    new LoginUser('Kadler Kim', 'cicada0014@gmail.com')
];
var userPromise = Promise.resolve(LOGINUSERS);

var LoginUserService = (function () {
    function LoginUserService() {
    }
    LoginUserService.prototype.findByName = function (name) {
        return userPromise.then(function (users) { return users.find(function (user) { return user.name === name; }); });
    };
    LoginUserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], LoginUserService);
    return LoginUserService;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/user.js.map

/***/ },

/***/ 408:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 408;


/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(530);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/main.js.map

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section_outline_outline_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_resolve_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_section_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invalid_url_page_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var routes = [
    {
        path: '',
        redirectTo: '3ndEditor/index',
        pathMatch: 'full'
    },
    {
        path: '3ndEditor',
        component: __WEBPACK_IMPORTED_MODULE_2__section_section_component__["a" /* SectionComponent */],
        children: [
            {
                path: '',
                redirectTo: 'index',
                pathMatch: 'full'
            },
            {
                path: '11',
                component: __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */]
            },
            {
                path: ':loginUserName',
                component: __WEBPACK_IMPORTED_MODULE_0__section_outline_outline_component__["a" /* OutlineComponent */],
                resolve: {
                    userResolveService: __WEBPACK_IMPORTED_MODULE_1__user_user_resolve_service__["a" /* UserResolveService */]
                }
            }
        ]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__invalid_url_page_component__["a" /* InvalidUrlPageComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//export const routedComponents = [NameComponent]; 
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/app-routing.module.js.map

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_nav_bar_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rxjs_operators__ = __webpack_require__(531);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(navService) {
        this.navService = navService;
        this.navbarAction = "false";
    }
    /**
      * 상단바 에니메이션 관련 메소드
      * @param void 서비스로 주입된 NavBarService 의 boolean 값을 감지하면 애니메이션을 동작시킴.
      * @returns void
      */
    AppComponent.prototype.lockAction = function () {
        this.navbarAction = this.navService.action + "";
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(743),
            styles: [__webpack_require__(728)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('headerFix', [
                    // transform 속성은 위치의 변경을 의미한다. translate3d 함수는 x,y,z축의 움직임을 나타내는데 음수값도 허용한다. 
                    // 초기에 width 와 height 값을 0으로 지정해서 보이지 않도록 한다.
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({})),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ transform: 'translate3d(0,-99%,0)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('false <=> true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(10)),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_nav_bar_service__["a" /* NavBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_nav_bar_service__["a" /* NavBarService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/app.component.js.map

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_nav_bar_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_auth_guard_can_deactivate_guard_service__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_auth_guard_auth_guard_service__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_section_module__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invalid_url_page_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_resolve_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_module__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(529);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__invalid_url_page_component__["a" /* InvalidUrlPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__section_section_module__["a" /* SectionModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* JsonpModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__header_auth_guard_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_1__header_auth_guard_can_deactivate_guard_service__["a" /* CanDeactivateGuard */], __WEBPACK_IMPORTED_MODULE_6__user_user_resolve_service__["a" /* UserResolveService */], __WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* LoginUserService */], __WEBPACK_IMPORTED_MODULE_0__shared_nav_bar_service__["a" /* NavBarService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/app.module.js.map

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);







//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/app.rxjs-operators.js.map

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(211);
/* harmony export (immutable) */ exports["a"] = handleError;

function handleError(error) {
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = '${erorr.status}- ${error.statusText||""} ${err}';
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
}
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/async-handling.promise.js.map

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        console.log("test");
        // return  this.checkLogin(url);
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return;
    };
    AuthGuard.prototype.checkLogin = function (url) {
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/auth-guard.service.js.map

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CanDeactivateGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanDeactivateGuard = (function () {
    function CanDeactivateGuard(_router) {
        this._router = _router;
    }
    CanDeactivateGuard.prototype.canDeactivate = function () {
        console.log("test");
        return window.confirm("저장되지 않았습니다. 나가시겠습니까");
    };
    CanDeactivateGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
    var _a;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/can-deactivate-guard.service.js.map

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_board_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__header_component__["a" /* HeaderComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__help_help_component__["a" /* HelpComponent */], __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_0__login_login_board_component__["a" /* LoginBoardComponent */]],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderModule);
    return HeaderModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/header.module.js.map

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () { };
    HelpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'help',
            template: __webpack_require__(745),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [])
    ], HelpComponent);
    return HelpComponent;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/help.component.js.map

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginBoardComponent = (function () {
    function LoginBoardComponent() {
    }
    LoginBoardComponent.prototype.ngOnInit = function () {
    };
    LoginBoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loginboard',
            template: ' <login></login> ',
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginBoardComponent);
    return LoginBoardComponent;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/login-board.component.js.map

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var that;
var LoginComponent = (function () {
    function LoginComponent(zone, render, router, _sanitizer) {
        this.zone = zone;
        this.render = render;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.clientId = '199152716518-9vgjiiunustbt8el3saorikuk7ngkmta.apps.googleusercontent.com';
        this.userImageUrl = this.deFaultImageUrl = this._sanitizer.bypassSecurityTrustResourceUrl("assets/image/defaultUserImage.png");
        that = this;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.ngAfterViewInit = function () {
        // angular 에서의 onload 이벤트는 바로 ngAfterViewInit 과 동일하다고 보면 된다.
        // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientloadurlorobject
        // 위 사이트가 gapi 문서이다.
        // 구글로그인 버튼 설정은 콜백으로 진행되기때문에 콜백함수로 넣어주고 (죄다 비동기임) 비동기상태에서 gapi 를 쓸수가 있다 type화 해놓았기때문에쓸수있다.
        this.googleInit();
    };
    LoginComponent.prototype.ngAfterViewChecked = function () {
        if (this.loginState === this.isSignChange) {
            this.loginState = this.isSignChange;
        }
    };
    LoginComponent.prototype.googleInit = function () {
        // 구글 로그인 설정 
        gapi.load('auth2', function () {
            // 구글 로그인 초기화부분
            auth2 = gapi.auth2.init({
                client_id: that.clientId,
                cookie_policy: 'single_host_origin',
                scope: 'profile email'
            });
            if (auth2.isSignedIn.get()) {
                that.loginState = "signOut";
            }
            else {
                that.loginState = "signIn";
            }
            auth2.isSignedIn.listen(that.signinChanged);
        });
    };
    LoginComponent.prototype.signIn = function () {
        auth2.signIn();
    };
    LoginComponent.prototype.signOut = function () {
        auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    };
    // 접속상태의 변화가 있는 것을 감지. 변화가 있으면 아무 것도 안하다가 상태변화가 일어나면 감지해서 로그인이면 true 로그아웃이면 false를 반환한다. 
    LoginComponent.prototype.signinChanged = function (val) {
        that.isSignChange = val;
        if (val) {
            //로그인 했을때,
            var url = that.router.createUrlTree(['3ndEditor', auth2.currentUser.get().getBasicProfile().getName()]);
            that.router.navigateByUrl(url);
            that.loginState = 'signOut';
            var trustImageUrl = that._sanitizer.bypassSecurityTrustUrl(auth2.currentUser.get().getBasicProfile().getImageUrl());
            that.userImageUrl = trustImageUrl;
        }
        else {
            //로그아웃 했을때,
            var url = that.router.createUrlTree(['3ndEditor']);
            that.router.navigateByUrl(url);
            that.loginState = 'signIn';
            that.userImageUrl = that.deFaultImageUrl;
        }
    };
    LoginComponent.prototype.mouseenter = function () {
        this.btnActivate = "z-depth-2 grey lighten-3 ";
    };
    LoginComponent.prototype.mouseout = function () {
        this.btnActivate = "";
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__(746),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/login.component.js.map

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_medium_editor__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_medium_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_medium_editor__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//head에 선언된 medium_editor 자바스크립트를 역참조한다.
var EditorComponent = (function () {
    function EditorComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        //파이프 공부해서 파이프 작성해보도록 한다. 
        this.isInit = false;
        this.editorOptions = {
            activeButtonClass: 'medium-editor-button-active',
            // 에디터 사용유무
            disableEditing: false,
            // 툴바 옵션
            toolbar: {
                /* These are the default options for the toolbar,
                   if nothing is passed this is what is used */
                allowMultiParagraphSelection: true,
                // 버튼 옵션
                buttons: [
                    'bold',
                    'italic',
                    'underline',
                    'anchor',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'quote',
                    'strikethrough',
                    'subscript',
                    'superscript',
                    'image',
                    'pre',
                    'orderedlist',
                    'unorderedlist',
                    'indent',
                    'outdent',
                    'justifyLeft',
                    'justifyCenter',
                    'justifyRight',
                    'justifyFull',
                    'removeFormat',
                    'html',
                ],
                diffLeft: 0,
                diffTop: -10,
                firstButtonClass: 'medium-editor-button-first',
                lastButtonClass: 'medium-editor-button-last',
                relativeContainer: null,
                standardizeSelectionStart: true,
                static: false,
                /* options which only apply when static is true */
                align: 'center',
                sticky: false,
                updateOnEmptySelection: true
            },
            placeholder: {
                /* This example includes the default options for placeholder,
                   if nothing is passed this is what it used */
                text: '',
                hideOnClick: true
            },
            paste: {
                /* This example includes the default options for paste,
                   if nothing is passed this is what it used */
                forcePlainText: true,
                cleanPastedHTML: false,
                cleanReplacements: [],
                cleanAttrs: ['class', 'style', 'dir'],
                cleanTags: ['meta'],
                unwrapTags: []
            },
            keyboardCommands: {
                /* This example includes the default options for keyboardCommands,
                   if nothing is passed this is what it used */
                commands: [
                    {
                        command: 'bold',
                        key: 'B',
                        meta: true,
                        shift: false,
                        alt: false
                    },
                    {
                        command: 'italic',
                        key: 'I',
                        meta: true,
                        shift: false,
                        alt: false
                    },
                    {
                        command: 'underline',
                        key: 'U',
                        meta: true,
                        shift: false,
                        alt: false
                    }
                ],
            }
        };
        //  에디터 생성!!
        // @types 에 타입을 지정해준다. 다만 사용법이 다 달라서 해당 내부를 뜯어봐야 어떻게 가져다 쓸지 보인다.
        new __WEBPACK_IMPORTED_MODULE_1_medium_editor__(renderer.selectRootElement(el.nativeElement), this.editorOptions);
        // 에디터에 대한 커스텀 이벤트 리스너 추가 
        this.el.nativeElement.addEventListener('drop', function ($event) {
            $event.preventDefault();
            var data = $event.dataTransfer.getData;
        });
    }
    EditorComponent.prototype.ngOnInit = function () { };
    EditorComponent.prototype.ngOnChanges = function () {
        // 이 메소드를 쓰면 무엇이든지 붙일 수가 있다.
        // 아웃라인 컴포넌트에서 미리 새니티제이션을 마친 스트링을 이너 html로 넣어줄수도 있다. 하지만 정말 html만 들어갈뿐더러 이미지 리소스같은건 건드릴수 없음 
        // 새니티제이션을 패스시키려면 각 태그를 분석한 후에 각각 맞는 새니티제이션을 해주어야 함. 
        this.renderer.selectRootElement(this.el.nativeElement).insertAdjacentHTML('beforeend', this.routeData);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], EditorComponent.prototype, "routeData", void 0);
    EditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'editor',
            template: __webpack_require__(747),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _b) || Object])
    ], EditorComponent);
    return EditorComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/editor.component.js.map

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_sanitizeHTML_pipe__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EditorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditorModule = (function () {
    function EditorModule() {
    }
    EditorModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__editor_component__["a" /* EditorComponent */]],
            // 상위 모듈에 노출시키려면 익스포트시켜야 한다.
            declarations: [__WEBPACK_IMPORTED_MODULE_1__editor_component__["a" /* EditorComponent */], __WEBPACK_IMPORTED_MODULE_0__shared_sanitizeHTML_pipe__["a" /* SanitizeHtmlPipe */]],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], EditorModule);
    return EditorModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/editor.module.js.map

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkFrame_service_promise__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return linkFrameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var linkFrameComponent = (function () {
    function linkFrameComponent(_sanitizer, connectService, rd, dragulaService) {
        this._sanitizer = _sanitizer;
        this.connectService = connectService;
        this.rd = rd;
        this.dragulaService = dragulaService;
        this.state = 'close';
        this.linkUrl = '';
        this.menuState = 'in';
        // 맨 처음 띄워줄 화면
        var defaultUrl = "http://www.tistory.com/";
        // sanitization 을 통과해야 angular app 에서 쓸 수 있다.
        this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(defaultUrl);
    }
    // iframe의 url을 바꾼다.
    linkFrameComponent.prototype.onEnter = function (inputUrl) {
        this.linkUrl = inputUrl;
        this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.linkUrl);
    };
    linkFrameComponent.prototype.ngOnInit = function () {
    };
    linkFrameComponent.prototype.toggleMenu = function () {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    // this.trustHtml= this._sanitizer.bypassSecurityTrustHtml(
    // this.rd.selectRootElement(this.iframeCmp.nativeElement).contentWindow.postMessage('','*'));
    // let drake = dragula([this.trustHtml,this.makeit.nativeElement]);
    //  iframe 내부로 접근하는 방법은 현재 막혀 있다. 보안 문제를 더 공부하고 도전해야 겠다.
    linkFrameComponent.prototype.ngAfterViewInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], linkFrameComponent.prototype, "iframeHeight", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], linkFrameComponent.prototype, "iframeOpacity", void 0);
    linkFrameComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'linkFrame',
            template: __webpack_require__(748),
            styles: [__webpack_require__(734)],
            providers: [__WEBPACK_IMPORTED_MODULE_0__linkFrame_service_promise__["a" /* LinkFrameService */]],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["trigger"])('slideInOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({
                        transform: 'translate3d(-100%, 0, 0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('400ms ease-in-out')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('400ms ease-in-out'))
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__linkFrame_service_promise__["a" /* LinkFrameService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__linkFrame_service_promise__["a" /* LinkFrameService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"]) === 'function' && _d) || Object])
    ], linkFrameComponent);
    return linkFrameComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/linkFrame.component.js.map

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkFrame_service_promise__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkFrame_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return linkFrameModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var linkFrameModule = (function () {
    function linkFrameModule() {
    }
    linkFrameModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["g" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__["DragulaModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__linkFrame_component__["a" /* linkFrameComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__linkFrame_component__["a" /* linkFrameComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__linkFrame_service_promise__["a" /* LinkFrameService */]],
        }), 
        __metadata('design:paramtypes', [])
    ], linkFrameModule);
    return linkFrameModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/linkFrame.module.js.map

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_tab_module__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linkFrame_linkFrame_module__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_editor_module__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__outline_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula_ng2_dragula__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OutlineModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OutlineModule = (function () {
    function OutlineModule() {
    }
    OutlineModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_4__editor_editor_module__["a" /* EditorModule */], __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__linkFrame_linkFrame_module__["a" /* linkFrameModule */], __WEBPACK_IMPORTED_MODULE_7_ng2_dragula_ng2_dragula__["DragulaModule"], __WEBPACK_IMPORTED_MODULE_2__tab_tab_module__["a" /* TabModule */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]],
            exports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__outline_component__["a" /* OutlineComponent */]],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], OutlineModule);
    return OutlineModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/outline.module.js.map

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_keymap_keymap_provider__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExportComponent = (function () {
    function ExportComponent(keymap) {
        this.keymap = keymap;
        this.isExportActive = false;
    }
    ExportComponent.prototype.openExport = function () {
        this.isExportActive = this.isExportActive ? false : true;
        console.log("openExport클릭됨");
    };
    ExportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "export",
            template: __webpack_require__(750),
            styles: [__webpack_require__(736)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('exportActive', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('deActive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ height: '0' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({})),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('deActive <=> active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300)),
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_keymap_keymap_provider__["a" /* Keymap */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_keymap_keymap_provider__["a" /* Keymap */]) === 'function' && _a) || Object])
    ], ExportComponent);
    return ExportComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/editorTab.export.component.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorTab_export_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExportModule = (function () {
    function ExportModule() {
    }
    ExportModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__editorTab_export_component__["a" /* ExportComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__editorTab_export_component__["a" /* ExportComponent */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ExportModule);
    return ExportModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/editorTab.export.module.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SaveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaveComponent = (function () {
    function SaveComponent() {
    }
    SaveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "save",
            template: __webpack_require__(751),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [])
    ], SaveComponent);
    return SaveComponent;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/editorTab.save.component.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorTab_save_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SaveModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaveModule = (function () {
    function SaveModule() {
    }
    SaveModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__editorTab_save_component__["a" /* SaveComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__editorTab_save_component__["a" /* SaveComponent */]],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], SaveModule);
    return SaveModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/editorTab.save.module.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShareComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareComponent = (function () {
    function ShareComponent() {
    }
    ShareComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "share",
            template: __webpack_require__(752),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [])
    ], ShareComponent);
    return ShareComponent;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/editorTab.share.component.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorTab_share_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShareModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShareModule = (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__editorTab_share_component__["a" /* ShareComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__editorTab_share_component__["a" /* ShareComponent */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ShareModule);
    return ShareModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/editorTab.share.module.js.map

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddComponent = (function () {
    function AddComponent() {
    }
    AddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "add",
            template: __webpack_require__(753),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddComponent);
    return AddComponent;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/linkTab.add.component.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkTab_add_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddModule = (function () {
    function AddModule() {
    }
    AddModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__linkTab_add_component__["a" /* AddComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_0__linkTab_add_component__["a" /* AddComponent */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AddModule);
    return AddModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/linkTab.add.module.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mock_mock_service__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LinkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinkComponent = (function () {
    function LinkComponent(linkService) {
        /**
        * @file linkTab.link.component.ts
        * @author KimTaemin 17/02/08
        * @brief to show Link
        * @see
        * @todo intersect with server, make method
        */
        // 서버 Json을 받는 리스트 맴버
        this.listLinks = [];
        // 목객체의 정보를 받음.
        this.listLinks = linkService.getLink();
        this.listLinkFixed = this.listLinks[0].links;
        this.listLinkUnfixed = this.listLinks[1].links;
    }
    LinkComponent.prototype.consoleEvent = function () {
        console.log("고정링크" + this.listLinkFixed[0].fixed[1] + this.listLinkFixed[0].url + "/" + this.listLinkFixed[1].fixed[1] + this.listLinkFixed[1].url);
        console.log("//////////////");
        console.log("비고정링크" + this.listLinkUnfixed[0].fixed[1] + this.listLinkUnfixed[0].url + "/" + this.listLinkFixed[1].fixed[1] + this.listLinkFixed[1].url);
    };
    LinkComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "linkPack",
            template: __webpack_require__(754),
            styles: [__webpack_require__(740)],
            providers: [__WEBPACK_IMPORTED_MODULE_0__mock_mock_service__["a" /* MockService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__mock_mock_service__["a" /* MockService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__mock_mock_service__["a" /* MockService */]) === 'function' && _a) || Object])
    ], LinkComponent);
    return LinkComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/linkTab.link.component.js.map

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkTab_link_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LinkModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LinkModule = (function () {
    function LinkModule() {
    }
    LinkModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaModule"], __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__linkTab_link_component__["a" /* LinkComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__linkTab_link_component__["a" /* LinkComponent */]],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], LinkModule);
    return LinkModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/linkTab.link.module.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LINKS; });
var LINKS = [
    {
        email: 'eosuntaek@gmail.com',
        links: [
            {
                url: 'http://www.google.com',
                fixed: [true, 1],
                trashed: false
            },
            {
                url: 'http://www.naver.com',
                fixed: [true, 2],
                trashed: false
            },
            {
                url: 'http://www.nate.com',
                fixed: [true, 3],
                trashed: false
            }
        ]
    },
    {
        email: 'eosuntaek@gmail.com',
        links: [
            {
                url: 'http://www.google.com',
                fixed: [false, 2],
                trashed: false
            },
            {
                url: 'http://www.naver.com',
                fixed: [false, 1],
                trashed: false
            }
        ]
    },
    {
        email: 'eosuntaek@gmail.com',
        links: [
            {
                url: 'http://www.google.com',
                fixed: [false, 2],
                trashed: false
            },
            {
                url: 'http://www.naver.com',
                fixed: [false, 1],
                trashed: false
            }
        ]
    }
];
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/mock-link.js.map

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_link__ = __webpack_require__(554);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MockService = (function () {
    function MockService() {
    }
    MockService.prototype.getLink = function () {
        return __WEBPACK_IMPORTED_MODULE_1__mock_link__["a" /* LINKS */];
    };
    MockService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], MockService);
    return MockService;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/mock.service.js.map

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TrashCanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrashCanComponent = (function () {
    function TrashCanComponent() {
    }
    TrashCanComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "trash-can",
            template: __webpack_require__(755),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [])
    ], TrashCanComponent);
    return TrashCanComponent;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/linkTab.trashCan.component.js.map

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkTab_trashCan_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TrashCanModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrashCanModule = (function () {
    function TrashCanModule() {
    }
    TrashCanModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__linkTab_trashCan_component__["a" /* TrashCanComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_0__linkTab_trashCan_component__["a" /* TrashCanComponent */]],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], TrashCanModule);
    return TrashCanModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/linkTab.trashCan.module.js.map

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = (function () {
    function TabComponent() {
    }
    TabComponent.prototype.ngOnInit = function () {
    };
    TabComponent.prototype.getTitle = function (url) {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], TabComponent.prototype, "usage", void 0);
    TabComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tab',
            template: __webpack_require__(756),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [])
    ], TabComponent);
    return TabComponent;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/tab.component.js.map

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkTab_add_linkTab_add_module__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorTab_share_editorTab_share_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorTab_export_editorTab_export_module__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorTab_save_editorTab_save_module__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__linkTab_trashCan_linkTab_trashCan_module__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tab_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linkTab_link_linkTab_link_module__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabModule = (function () {
    function TabModule() {
    }
    TabModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["g" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_0__linkTab_add_linkTab_add_module__["a" /* AddModule */], __WEBPACK_IMPORTED_MODULE_6__linkTab_link_linkTab_link_module__["a" /* LinkModule */], __WEBPACK_IMPORTED_MODULE_4__linkTab_trashCan_linkTab_trashCan_module__["a" /* TrashCanModule */], __WEBPACK_IMPORTED_MODULE_3__editorTab_save_editorTab_save_module__["a" /* SaveModule */], __WEBPACK_IMPORTED_MODULE_2__editorTab_export_editorTab_export_module__["a" /* ExportModule */], __WEBPACK_IMPORTED_MODULE_1__editorTab_share_editorTab_share_module__["a" /* ShareModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__tab_component__["a" /* TabComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__tab_component__["a" /* TabComponent */]],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], TabModule);
    return TabModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/tab.module.js.map

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SectionRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//해당 라우트 정보는 app-routing.module.ts 에 기술되어있다.
var SectionRoutingModule = (function () {
    function SectionRoutingModule() {
    }
    SectionRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], SectionRoutingModule);
    return SectionRoutingModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/section-routing.module.js.map

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__outline_outline_module__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section_routing_module__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SectionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionModule = (function () {
    function SectionModule() {
    }
    SectionModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__section_routing_module__["a" /* SectionRoutingModule */], __WEBPACK_IMPORTED_MODULE_0__outline_outline_module__["a" /* OutlineModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__section_component__["a" /* SectionComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__section_component__["a" /* SectionComponent */]],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], SectionModule);
    return SectionModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/section.module.js.map

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_src_facade_browser__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return KeymapDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeymapDirective = (function () {
    function KeymapDirective() {
        // 이 지시자의 사용법 : dom 엘리먼트에 다음과 같은 내용을 추가 하면 된다.
        //<element keyMap [keyCode]="keymap.keycode" [isCtrKey]="'false'"  [isAltKey]="'true'" (keyAction)="keyAction()"> </element>
        //         지시자를 추가해주고 사용할 keycode를 입력해준다. keymap 값 제공자가 전역에 주입되어 있으므로 그냥 불러오면 된다. 
        // alt , ctr 등 다른 동작키는 기본적으로 false이다. alt 키를 추가해주면 된다. 아직 중첩 동작키는 만들지 않았다
        //  마지막으로 keyaction 부분에 실행하고자 하는 컴포넌트의 메소드를 바인딩해주면 된다. 
        //눌러진 키랑 키코드가 동일하면 해당 메소드를 실행할 동작 이벤트를 던져준다. 
        this.keyAction = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    // window 전역에서 눌린 키에 대해서 움직이도록 한다. 일반 키
    KeymapDirective.prototype.onkeydown = function ($event) {
        // 에디터의 키맵과 충돌방지를 위해 펑션키를 제외하고는 전부 다른 동작키가 있도록 함.
        if ($event.altKey && this.isAltKey === "true") {
            if ($event.keyCode === this.keyCode) {
                this.keyAction.emit();
            }
        }
        else if ($event.ctrlKey && this.isCtrKey === "true") {
            if ($event.keyCode === this.keyCode) {
                this.keyAction.emit();
            }
        }
        else if ($event.shiftKey && this.isShiftKey === "true") {
            if ($event.keyCode === this.keyCode) {
                this.keyAction.emit();
            }
        }
        else if (112 <= $event.keyCode && $event.keyCode <= 123) {
            if ($event.keyCode === this.keyCode) {
                this.keyAction.emit();
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], KeymapDirective.prototype, "keyCode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], KeymapDirective.prototype, "isAltKey", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], KeymapDirective.prototype, "isCtrKey", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], KeymapDirective.prototype, "isShiftKey", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], KeymapDirective.prototype, "keyAction", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('window:keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_src_facade_browser__["b" /* KeyboardEvent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_src_facade_browser__["b" /* KeyboardEvent */]) === 'function' && _a) || Object]), 
        __metadata('design:returntype', void 0)
    ], KeymapDirective.prototype, "onkeydown", null);
    KeymapDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({ selector: '[keyMap]' }), 
        __metadata('design:paramtypes', [])
    ], KeymapDirective);
    return KeymapDirective;
    var _a;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/keymap.directive.js.map

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SanitizeHtmlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtmlPipe = (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (value) {
        return this._sanitizer.bypassSecurityTrustHtml(value);
    };
    SanitizeHtmlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'sanitizeHtml'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
    var _a;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/sanitizeHTML.pipe.js.map

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/environment.js.map

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/polyfills.js.map

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = ":host{\n    position: fixed;\n    width:100%;\n    z-index: 11;\n}"

/***/ },

/***/ 730:
/***/ function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  opacity: 0.9;\n  width: 100%; \n  height: 100vh;\n  z-index: 50;\n  background: lightslategray;\n  \n}"

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = ":host{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n\n     \n\n    z-index: 45;\n}\n"

/***/ },

/***/ 732:
/***/ function(module, exports) {

module.exports = ":host{\n    position: fixed;\n    \n    top: 9%;\n    /*위치를 상하좌우 margin값을 퍼센트로 주고 있긴 한데 이렇게 주먹구구식으로 하면 정밀한 위치잡기가 힘들어질 것이다... 해결방안이 필요*/\n    left: 70%;\n    /*right: auto;*/\n    width : 30%;\n    \n    /*앞뒤 깊이를 줄 수 있는 속성임.*/\n    /*display: none;*/\n    /*transform: translateX(100);*/\n    box-shadow: rgba(0,0,0,0.5) 0 0 0 9999px;\n    z-index: 999;\n\n    \n    \n}\n\n"

/***/ },

/***/ 733:
/***/ function(module, exports) {

module.exports = "\n/*현재 컴포넌트의 상위 컨텍스트를 살펴볼수 있다. body를 지정할수 있는 것으로 보아 트리를 검색하는 것으로 보인다. */\n\n\n\n\n\n"

/***/ },

/***/ 734:
/***/ function(module, exports) {

module.exports = "\n/*:host-context(){\n  height: 100%\n}*/\niframe{\n  width: 100%;\n  position: relative;\n}\n\n"

/***/ },

/***/ 735:
/***/ function(module, exports) {

module.exports = "/* :host 는 내가 불림을 당할때 부모를 기준으로 적용되는 것을 의미하는듯! 쉐도우 돔과 관련있음.*/\n:host-context(body){\n  height: 100%; margin: 0; padding: 0;\n}\n\n#activeBtn {\n  position: fixed;\n  bottom: 0;\n  height: 10%;\n  z-index: 40;\n}\n\n\nlinkFrame {\n  /*position 값을 고정시켜두면 하나의 레이어층이 생기는 효과를 받는것 같다. 그러나 어디까지나 부모 태그 안에서의 제한을 지니고 있다.*/\n  position: fixed; \n  left: 0.5%;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  height: 91%;\n  z-index: 10;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n  -webkit-transform: translateY(9%);\n          transform: translateY(9%);\n  \n}\n\n\n#devider{\n  position: fixed;\n  height: 91%;\n  z-index: 9;\n  cursor: col-resize;\n  -webkit-transform: translateY(9%);\n          transform: translateY(9%);\n  \n}\n\neditor {\n  position: fixed;\n  overflow: auto;\n  width: 100%; \n  height: 91%;\n  z-index: 10;\n  -webkit-transform: translateY(9%);\n          transform: translateY(9%); \n  outline: black thick;\n}\n\n#linkTab{\n  position: fixed;\n  left: 0;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  width: 5%;\n  height: 91%;\n  min-width: 50px;\n  z-index: 9998;\n}\n\n#editorTab{\n  position: fixed;\n  left: auto;\n  top: auto;\n  right: 0;\n  bottom: auto;\n  width: 5%;\n  height: 91%;\n  min-width: 50px;\n  z-index: 9998;\n}\n\n\n\n#linkTabEnterDetector{\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: auto;\n  bottom: 0;\n  width: 0.1%;\n  min-width: 3px;\n  z-index: 9999;\n}\n\n#editorTabEnterDetector{\n  position: fixed;\n  left: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 0.1%;\n  min-width: 3px;\n  z-index: 9999;\n}\n\n#linkTabLeaveDetector{\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: auto;\n  bottom: 0;\n  width: 7%;\n  min-width: 3px;\n  z-index: 9997;\n}\n\n/*#editorTabLeaveDetector{\n  position: fixed;\n  left: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 8%;\n  min-width: 3px;\n  z-index: 9997;\n}*/"

/***/ },

/***/ 736:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 737:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 738:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 739:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 740:
/***/ function(module, exports) {

module.exports = ".linkbox{\n  padding-top:15px; \n  padding-right:1px; \n  padding-bottom:5px; \n  padding-left:1px; \n  display: block;\n  border: 2px solid cornflowerblue;\n  border-radius: 10px;\n}\n\n.linkbox:hover{\n  background:  dimgray\n}\n"

/***/ },

/***/ 741:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 742:
/***/ function(module, exports) {

module.exports = ".hidden{\n  visibility: hidden;\n}\n\n.tab-btn { \n  padding-top:15px; \n  padding-right:1px; \n  padding-bottom:5px; \n  padding-left:1px; \n  display: block;\n  border: 2px dotted cornflowerblue;\n  border-radius: 10px;\n}\n\n#editorTab-color {\n  background: gray;\n  color: white;\n}\n\n#linkTab-color {\n  background:gray;\n  color: white;\n}\n\n.tab-btn:hover{\n  background:  lightgray\n}\n"

/***/ },

/***/ 743:
/***/ function(module, exports) {

module.exports = "<!--위쪽 네비게이션 바 (로그인 기능이 들어갈 예정임)-->\n<header [@headerFix]=\"navbarAction\" (lockAction)=\"lockAction()\" ></header>\n\n<!--라우터를 통해 접근 가드를 걸어두고 사용자에 맞게 화면을 표시해주어야한다. -->\n\n<router-outlet></router-outlet>\n"

/***/ },

/***/ 744:
/***/ function(module, exports) {

module.exports = "<ul id='dropdown1' class='dropdown-content right'>\n    <li class=\"divider\"></li>\n    <!--<li>\n        <a class=\"waves-effect\">\n            <i class=\" material-icons\" (click)=\"showLoginModal()\">vpn_key</i>\n        </a>\n    </li>\n    <li>\n        <a class=\"waves-effect\" keyMap [keyCode]=\"keymap.wide_key\" [isAltKey]=\"'true'\" (keyAction)=\"openWith()\" (click)=\"openWith()\">\n            <i class=\"material-icons \">open_with</i></a>\n    </li>\n    <li>\n        <a class=\"waves-effect\" keyMap [keyCode]=\"keymap.help_key\" (keyAction)=\"openHelp()\" (click)=\"openHelp()\">\n            <i class=\"material-icons \">live_help</i></a>\n    </li>\n    <li>\n        <a class=\"waves-effect\" keyMap [keyCode]=\"keymap.header_fixed_key\" [isAltKey]=\"'true'\" (keyAction)=\"headerFix()\" (click)=\"headerFix()\">\n            <i class=\"material-icons\">lock_open</i>\n        </a>\n    </li>-->\n</ul>\n\n<nav class=\"blue-grey darken-2\">\n    <div class=\"nav-wrapper\">\n        <a data-activates=\"dropdown1\" class=\"dropdown-button button-collapse \"><i class=\"material-icons\">menu</i></a>\n        <a class=\"button-collapse\"></a>\n        <loginboard [@showLoginModal]=\"isShowLoginModal\" (click)=\"showLoginModal()\"></loginboard>\n        <a href=\"#\" class=\"brand-logo center\"><i><h4>3ND EDITOR</h4></i></a>\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li>\n                <a class=\"waves-effect\">\n                    <i class=\" material-icons\" (click)=\"showLoginModal()\">vpn_key</i>\n                </a>\n            </li>\n            <li>\n                <a class=\"waves-effect\" keyMap [keyCode]=\"keymap.wide_key\" [isAltKey]=\"'true'\" (keyAction)=\"openWith()\" (click)=\"openWith()\">\n                    <i class=\"material-icons \">open_with</i></a>\n            </li>\n            <li>\n                <a class=\"waves-effect\" keyMap [keyCode]=\"keymap.help_key\" (keyAction)=\"openHelp()\" (click)=\"openHelp()\">\n                    <i class=\"material-icons \">live_help</i></a>\n            </li>\n            <li>\n                <a class=\"waves-effect\" keyMap [keyCode]=\"keymap.header_fixed_key\" [isAltKey]=\"'true'\" (keyAction)=\"headerFix()\" (click)=\"headerFix()\">\n                    <i class=\"material-icons\">lock_open</i>\n                </a>\n            </li>\n        </ul>\n\n\n    </div>\n\n\n\n</nav>\n\n<help *ngIf=\"isHelpActive\"></help>"

/***/ },

/***/ 745:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n    <table>\n        <thead>\n            <tr>\n                <th data-field=\"id\"><h5><b>Shortcut</b></h5></th>\n                <th data-field=\"name\"><h5><b>Assigned Action</b></h5></th>\n                <th data-field=\"price\"><h5><b>Enabled</b></h5></th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr>\n                <td>F1</td>\n                <td>도움말</td>\n                <td>global</td>\n            </tr>\n            <tr>\n                <td>Alt + w </td>\n                <td>전체화면</td>\n                <td>global</td>\n            </tr>\n            <tr>\n                <td>Alt + s</td>\n                <td>에디터 화면 -> 50:50 분할   </td>\n                <td>global</td>\n            </tr>\n        </tbody>\n         <thead>\n            <tr>\n                <th data-field=\"id\"><h5><b>Shortcut</b></h5></th>\n                <th data-field=\"name\"><h5><b>Assigned Action</b></h5></th>\n                <th data-field=\"price\"><h5><b>Enabled</b></h5></th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr>\n                <td>Ctr + b</td>\n                <td>텍스트 굵게</td>\n                <td>editor</td>\n            </tr>\n            <tr>\n                <td>Alt + w </td>\n                <td>전체화면</td>\n                <td>editor</td>\n            </tr>\n            <tr>\n                <td>Alt + s</td>\n                <td>에디터 화면 -> 50:50 분할   </td>\n                <td>editor</td>\n            </tr>\n        </tbody>\n    </table>\n\n</div>"

/***/ },

/***/ 746:
/***/ function(module, exports) {

module.exports = "<div class=\"card  white z-depth-5\" style=\"margin: 0\">\n\n  <div class=\"card-content black-text\" style=\"padding-bottom:0\">\n    <div class=\"row\">\n      <img class=\"col s4 m4 l4\" [src]=\"userImageUrl\">\n      <span class=\"card-title\">\n        <div>{{loginState}} </div>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"card-action black-text\"(mouseenter)=\"mouseenter()\" (mouseout)=\"mouseout()\" style=\"padding: 0; font-size: 150%\">\n    <div (click)=\"signIn()\" (mouseenter)=\"mouseenter()\"  [ngClass]=\"btnActivate\"  class=\"center-align\" *ngIf=\"loginState =='signIn'\" style=\"width: 100%\">\n      <span (click)=\"signIn()\" (mouseenter)=\"mouseenter()\" (mouseout)=\"mouseenter()\" *ngIf=\"loginState =='signIn'\">{{loginState}}</span>\n    </div>\n    <div (click)=\"signOut()\"(mouseenter)=\"mouseenter()\"  [ngClass]=\"btnActivate\" class=\"center-align\" *ngIf=\"loginState =='signOut'\" style=\"width: 100%\">\n      <span (click)=\"signOut()\" (mouseenter)=\"mouseenter()\" (mouseout)=\"mouseenter()\" *ngIf=\"loginState =='signOut'\">{{loginState}} </span>\n    </div>\n\n  </div>\n</div>"

/***/ },

/***/ 747:
/***/ function(module, exports) {

module.exports = "\n<!--플레이스 홀더로 만들 방법 생각중.-->\n\n\n<!--<img src=\"assets/image/Logo_3ndEditor.png\" />-->\n<!--<iframe src=\"https://www.youtube.com/embed/oUdXU8SVVuE\"></iframe>-->\n<!--<div [innerHtml]=\"testHtml\"></div>-->\n<!--{{routeData}}-->\n\n<!--안녕하세요!!!!-->"

/***/ },

/***/ 748:
/***/ function(module, exports) {

module.exports = "<div>\n  <!--<button (click)=\"toggleMenu()\" class=\"btn\">\n  <span>toggle menu</span>\n</button>-->\n\n  <div>\n    <input #inputUrl type=\"url\" placeholder=\"http://\" (keyup.enter)=\"onEnter(inputUrl.value)\" />\n    <span><!--<img>iframe 종료 기능을 하는 x자 이미지</img>--></span>\n  </div>\n\n  <iframe #somevar [dragula]=\"'bag-one'\" [ngStyle]=\"{'opacity':iframeOpacity,'height':iframeHeight}\" sandbox=\"allow-same-origin allow-forms allow-modals allow-scripts\"\n    [src]=\"trustResourceURL\" >\n\n\n    </iframe>\n</div>"

/***/ },

/***/ 749:
/***/ function(module, exports) {

module.exports = "<!--아웃라인 컴포넌트의 전반적인 컨테이너를 담당한다.-->\n<div class=\"outline row\" [@navbarAction]=\"navbarAction\">\n    <!--row 클래스 아래에서만 grid를 줄 수 있다. css 비율값으로 분할을 대체하였다.-->\n\n    <!--<input [(ngModel)]=\"value\"> <br><p>{{value}}</p>-->\n    <!--링크 프레임(아이프레임으로 구현되는 곳)이 들어가는 자리임. 링크프레임생성버튼 활성유무에 따라 없어지고 나타난다. -->\n    <linkFrame [@navbarAction]=\"navbarAction\" class=\"z-depth-3\" [ngStyle]=\"{'width': linkFrameWidth, 'transform': linkFrameTransform,'z-index': linkFrameZIndex }\"\n        [iframeOpacity]=\"iframeOpacity\" [iframeHeight]=\"iframeHeight\"></linkFrame>\n\n        <span id=\"devider\" [@navbarAction]=\"navbarAction\" draggable=\"true\" [ngStyle]=\"{ 'z-index': dividerZIndex ,'width': dividerWidth, 'transform': dividerTransform}\"\n            (drag)=\"screenResizeStart($event)\" (dragend)=\"screenResizeEnd($event)\" (mousedown)=\"dividerClick()\" (mouseup)=\"dividerDeActive()\"></span>\n\n            <!--에디터 프레임(미디움 에디터로 구현되는 곳)이 들어가는 자리, 링크프레임생성버튼 활성유무에 따라 크기가 조절된다. (12->6)-->\n            <editor class=\"flow-text\" [@navbarAction]=\"navbarAction\" [dragula]='\"first-bag\"' \n            [routeData]=\"inputParam\" \n            [ngStyle]=\"{'width': editorWidth,\n             'transform': editorTransform,\n             'outline':editorFocusOutline }\"></editor>\n\n\n            <div id=\"activeBtn\" [ngClass]=\"btnTransition\">\n                <a class=\"btn-floating btn-large waves-effect waves-light red\" keyMap [keyCode]=\"keymap.create_frame_key\" [isCtrKey]=\"'false'\"\n                    [isAltKey]=\"'true'\" (keyAction)=\"createLinkFrame()\" (click)=\"createLinkFrame()\">\n                    <i class=\"material-icons\">add</i>\n                    </a>\n            </div>\n            <!--탭의 usage에 따라 tab의 종류를 다르게 불러옴-->\n            <tab id=\"linkTab\" [@navbarAction]=\"navbarAction\" [@openLinkTab]=\"linkTabState\" [usage]=\"tabUsage_link\"></tab>\n            <tab id=\"editorTab\" [@navbarAction]=\"navbarAction\" [@openEditorTab]=\"editorTabState\" [usage]=\"tabUsage_editor\" (mouseleave)=\"leaveEditorTab()\"></tab>\n            <!--화면의 양극쪽에 마우스가 올려질 때 탭을 나타냄. linkTab은 링크프레임이 true일 때만 활성화-->\n            <div id=\"linkTabEnterDetector\" [@navbarAction]=\"navbarAction\" *ngIf=\"isActiveCrtLinkFrameBtn==true\" (mouseenter)=\"enterLinkTab()\"></div>\n            <div id=\"editorTabEnterDetector\" [@navbarAction]=\"navbarAction\" (mouseenter)=\"enterEditorTab()\"></div>\n            <div id=\"linkTabLeaveDetector\" [@navbarAction]=\"navbarAction\" *ngIf=\"linkTabState==='active'\" (mouseleave)=\"leaveLinkTab()\"></div>\n            <!--<div id=\"editorTabLeaveDetector\" *ngIf=\"editorTabState==='active'\" (mouseleave)=\"leaveEditorTab()\"></div>-->\n</div>"

/***/ },

/***/ 750:
/***/ function(module, exports) {

module.exports = "<div>\n    <div>\n        <img [@exportActive]=\"isExportActive\" src=\"assets/image/pdfIcon.png\" width=\"30px\" height=\"40px\"/>\n    </div>\n</div>\n"

/***/ },

/***/ 751:
/***/ function(module, exports) {

module.exports = "<div>\n    <div>\n        <img src=\"assets/image/googledriveIcon.png\" width=\"40px\" height=\"40px\"/>\n    </div>\n</div>"

/***/ },

/***/ 752:
/***/ function(module, exports) {

module.exports = "<div>\n    <div>\n        <img src=\"assets/image/shareicon.png\" width=\"40px\" height=\"40px\"/>\n    </div>\n</div>"

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = "<div>\n    <div>\n        <img src=\"assets/image/addIcon.png\" width=\"30px\" height=\"30px\"/>\n    </div>\n</div>"

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = "<div>\n    <div [dragula]='\"fixed-link\"' [dragulaModel]='listLinkFixed' >\n        <div class=\"url-box-wrapper FixedLink\" *ngFor=\"let linkA of listLinkFixed\">  <!--btn 속성 추가해야함-->\n            <div class=\"linkbox\">\n                <!--(click)=\"url.toggleMenu()\"-->\n                <div class=\"tab-btn\">\n                    <img class=\"left\" src=\"assets/image/fixedBar.png\" width=\"4\" height=\"30\"/>\n                    <img src=\"https://www.google.com/s2/favicons?domain={{linkA.url}}\" alt=\"favicon\" width=\"30\"  height=\"30\">\n                </div>\n            </div>\n            <!--<div class=\"urlTip hidden\">\n                <b>Title이 들어올 자리</b> <br>\n                단축키 : ctrl + alt + 숫자패드 @번\n            </div>-->\n        </div>\n    </div>\n    <div [dragula]='\"unfixed-link\"' [dragulaModel]='listLinkUnfixed'>\n        <div class=\"url-box-wrapper UnfixedLink\" *ngFor=\"let linkB of listLinkUnfixed\">  <!--btn 속성 추가해야함-->\n            <div class=\"linkbox\">\n                <!--(click)=\"url.toggleMenu()\"-->\n                <div class=\"tab-btn\">\n                    <img class=\"left\" src=\"assets/image/unfixedBar.png\" width=\"4\" height=\"30\"/>\n                    <img src=\"https://www.google.com/s2/favicons?domain={{linkB.url}}\" alt=\"favicon\" width=\"30\"  height=\"30\">\n                </div>\n            </div>\n            <!--<div class=\"urlTip hidden\">\n                <b>Title이 들어올 자리</b> <br>\n                 단축키 : ctrl + alt + 숫자패드 @번\n            </div>-->\n        </div>\n    </div>\n    <button (click)=\"consoleEvent()\">콘솔</button><br>\n    \n    <input [(ngModel)]=\"value\"> <br><p>{{value}}</p>\n</div>"

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = "<div>\n    <div>\n        <img src=\"assets/image/trashcanIcon.png\" width=\"40px\" height=\"40px\"/>\n    </div>\n</div>"

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = "<div id=\"linkTab-color\" *ngIf=\"usage==='linkTab'\" >\n    <div class=\"center\">\n        <div class=\"top-bar\"> URL List</div>\n        <div>\n            <add class=\"tab-btn\"></add>\n        </div>\n        <div>\n            <linkPack></linkPack>\n        </div>\n        <div>\n            <trash-can class=\"tab-btn\"></trash-can>\n        </div>\n    </div>\n</div>\n\n<div id=\"editorTab-color\" *ngIf=\"usage==='editorTab'\">\n    <div class=\"center\">\n        <div class=\"top-bar\">Editor Tab</div>\n        <div>\n            <save class=\"tab-btn\"></save>\n        </div>\n        <div>\n            <share class=\"tab-btn\"></share>\n        </div>\n        <div>\n            <export class=\"tab-btn\"></export>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keymap_keymap_directive__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keymap_keymap_provider__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_0__keymap_keymap_directive__["a" /* KeymapDirective */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_0__keymap_keymap_directive__["a" /* KeymapDirective */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__keymap_keymap_provider__["b" /* KeymapProvider */]],
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/Users/Youngtae/dev/3ndEditor/FrontAngular/src/shared.module.js.map

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(409);


/***/ }

},[805]);
//# sourceMappingURL=main.bundle.map