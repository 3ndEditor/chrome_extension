import { ChromeExtensionService } from '../../shared/chrome-extension.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Materialize: any;
@Component({
    selector: 'no-token',
    templateUrl: 'no-token-page.component.html',
    styleUrls: ['no-token-page.component.css']
})
export class NoTokenPageComponent implements OnInit {


    isBtnActivate: string;
    constructor(private chromeService: ChromeExtensionService) { }

    ngOnInit() {
        $(document).ready(function () {
            $('.parallax').parallax();
        });

    }
    test() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000", true);
        // xhr.withCredentials = true;
        xhr.onload = function (result) {
            console.log(result)
        };
        xhr.send();

    }
    interactiveGetToken() {
        this.chromeService.interactiveGetToken().then().catch(() => {
            this.isBtnActivate = '';
            Materialize.toast('로그인에 실패하였습니다.', 5000);
        });
        Materialize.toast('잠시 기다려주세요. 구글 로그인을 진행합니다.', 5000);
        this.isBtnActivate = "disabled"

    }

}