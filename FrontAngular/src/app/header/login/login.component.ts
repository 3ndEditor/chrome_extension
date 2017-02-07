import { isStyleUrlResolvable } from '@angular/compiler/src/style_url_resolver';
import { Component, ElementRef, NgZone, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';


declare var $: any;
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    @Output() childReadyEvent: EventEmitter<Object> = new EventEmitter();

    @ViewChild('test') el: ElementRef;
    public auth2: any;
    constructor(private zone: NgZone) {

    }

    ngOnInit() {

    }

    public googleInit() {
        let that = this;

        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: '199152716518-9vgjiiunustbt8el3saorikuk7ngkmta.apps.googleusercontent.com',
                cookie_policy: 'single_host_origin',
                scope: 'profile email'
            });
              
            gapi.signin2.render('hoho', {
                'scope': 'email',
                'width': 200,
                'height': 20,
                'longtitle': true,
                'theme': 'dark',
                'onsuccess': ((googleUser) => {
                    let profile = googleUser.getBasicProfile();
                    console.log('Token || ' + googleUser.getAuthResponse().id_token);
                    console.log('ID: ' + profile.getId());
                    console.log('Name: ' + profile.getName());
                    console.log('Image URL: ' + profile.getImageUrl());
                    console.log('Email: ' + profile.getEmail());
                    //YOUR CODE HERE

                }),
                'onfailure': ((error)=>{
                     alert(JSON.stringify(error, undefined, 2));
                })
            })
            // that.attachSignin(that.el.nativeElement);
            
        });
    }

    //  직접 클릭 이벤트를 줄때.
    // public attachSignin(element) {
    //     let that = this;
    //     this.auth2.attachClickHandler(element, {},
    //         function (googleUser) {

    //             let profile = googleUser.getBasicProfile();
    //             console.log('Token || ' + googleUser.getAuthResponse().id_token);
    //             console.log('ID: ' + profile.getId());
    //             console.log('Name: ' + profile.getName());
    //             console.log('Image URL: ' + profile.getImageUrl());
    //             console.log('Email: ' + profile.getEmail());
    //             //YOUR CODE HERE


    //         }, function (error) {
    //             alert(JSON.stringify(error, undefined, 2));
    //         });
    // }

    ngAfterContentInit() {
        // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientloadurlorobject
        // 위 사이트가 gapi 문서이다.
        // 구글로그인 버튼 설정은 콜백으로 진행되기때문에 콜백함수로 넣어주고 (죄다 비동기임) 비동기상태에서 gapi 를 쓸수가 있다 type화 해놓았기때문에쓸수있다.

        // this.googleInit();

    }
    




}