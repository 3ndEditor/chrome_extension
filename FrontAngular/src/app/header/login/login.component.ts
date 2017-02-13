import { SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { isStyleUrlResolvable } from '@angular/compiler/src/style_url_resolver';
import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    NgZone,
    OnInit,
    Output,
    Renderer,
    ViewChild
} from '@angular/core';

declare var auth2: any;
var that;
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    
    private btnActivate :string;
    

    private apiKey: string;
    private clientId: string;
    private loginState: boolean;
    private isSignChange: boolean;
    private userImageUrl: SafeUrl;
    private deFaultImageUrl : SafeUrl;
    constructor(private zone: NgZone, private render: Renderer, private router: Router, private _sanitizer: DomSanitizer) {
        this.clientId = '199152716518-9vgjiiunustbt8el3saorikuk7ngkmta.apps.googleusercontent.com';
        this.userImageUrl = this.deFaultImageUrl =this._sanitizer.bypassSecurityTrustResourceUrl("assets/image/defaultUserImage.png");
        that = this;

    }

    ngOnInit() { }
    ngAfterViewInit() {
        // angular 에서의 onload 이벤트는 바로 ngAfterViewInit 과 동일하다고 보면 된다.
        // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientloadurlorobject
        // 위 사이트가 gapi 문서이다.
        // 구글로그인 버튼 설정은 콜백으로 진행되기때문에 콜백함수로 넣어주고 (죄다 비동기임) 비동기상태에서 gapi 를 쓸수가 있다 type화 해놓았기때문에쓸수있다.
        this.googleInit();

    }

    ngAfterViewChecked() {
        if (this.loginState === this.isSignChange) {
            this.loginState = this.isSignChange;
        }
    }

    public googleInit() {

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
            } else {
                that.loginState = "signIn"
            }
            auth2.isSignedIn.listen(that.signinChanged);
        });
    }
    signIn() {
        auth2.signIn();
    }

    signOut() {
        auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }

    // 접속상태의 변화가 있는 것을 감지. 변화가 있으면 아무 것도 안하다가 상태변화가 일어나면 감지해서 로그인이면 true 로그아웃이면 false를 반환한다. 
    public signinChanged(val) {
        that.isSignChange = val;
        if (val) {
            //로그인 했을때,

            let url = that.router.createUrlTree(['3ndEditor', auth2.currentUser.get().getBasicProfile().getName()]);
            that.router.navigateByUrl(url);
            that.loginState = 'signOut';
            let trustImageUrl = that._sanitizer.bypassSecurityTrustUrl(auth2.currentUser.get().getBasicProfile().getImageUrl());
            that.userImageUrl = trustImageUrl;

        } else {
            //로그아웃 했을때,
            let url = that.router.createUrlTree(['3ndEditor']);
            that.router.navigateByUrl(url);
            that.loginState = 'signIn';
            that.userImageUrl = that.deFaultImageUrl;
            // that.signAction.emit();
        }

    }

    public mouseenter() {
        this.btnActivate = "z-depth-2 grey lighten-3 ";
    }
    public mouseout() {
        this.btnActivate = "";
    }



}