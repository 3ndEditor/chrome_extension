import { isStyleUrlResolvable } from '@angular/compiler/src/style_url_resolver';
import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    NgZone,
    OnInit,
    Output,
    Renderer,
    ViewChild
} from '@angular/core';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {


    // @ViewChild('gLoginBtn') el: ElementRef;
    public auth2: any;
    constructor(private zone: NgZone,private render: Renderer) {
        
    }

    ngOnInit() {
         
    }

    ngAfterViewInit() {
        // angular 에서의 onload 이벤트는 바로 ngAfterViewInit 과 동일하다고 보면 된다.
        // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientloadurlorobject
        // 위 사이트가 gapi 문서이다.
        // 구글로그인 버튼 설정은 콜백으로 진행되기때문에 콜백함수로 넣어주고 (죄다 비동기임) 비동기상태에서 gapi 를 쓸수가 있다 type화 해놓았기때문에쓸수있다.
       
        this.googleInit();
    }

    ngAfterViewChecked(){
        
    }

    public googleInit() {
        let that = this;

        // 구글 로그인 설정 
        gapi.load('auth2', function () {
            // 구글 로그인 초기화부분
           that.auth2 = gapi.auth2.init({
                client_id: '199152716518-9vgjiiunustbt8el3saorikuk7ngkmta.apps.googleusercontent.com',
                cookie_policy: 'single_host_origin',
                scope: 'profile email'


            });
            // // 구글 로그인 버튼 렌더링 
            // gapi.signin2.render('gLoginBtn', {
            //     'scope': 'email',
            //     'width': 400,
            //     'height': 100,
            //     'longtitle': true,
            //     'theme': 'dark',

            // })
            // auth2.isSignedIn.listen(that.signinChanged);
            // auth2.currentUser.listen(that.userChanged);
            // auth2.signIn();
            // 구글로그인 클릭리스너 부여 
            // that.attachSignin(that.render.selectRootElement(that.el.nativeElement));

        });

    }

    //  직접 클릭 이벤트를 줄때.
    public attachSignin(element) {
        let that = this;
        that.auth2.attachClickHandler(element, {},
            function (googleUser) {
                let profile = googleUser.getBasicProfile();
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
            }, function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });
    }


    
    signOut() {
       this.auth2 = gapi.auth2.getAuthInstance();
        this.auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }

    // 접속상태의 변화가 있는 것을 감지. 변화가 있으면 아무 것도 안하다가 상태변화가 일어나면 감지해서 로그인이면 true 로그아웃이면 false를 반환한다. 
    public signinChanged(val) {
        console.log('Signin state changed to ', val);
    }

    public userChanged(user) {
        console.log('User now: ', user);
        // this.updateGoogleUser();

    }



}