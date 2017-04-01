import { ChromeExtensionService } from '../../shared/chrome-extension.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Materialize :any;
@Component({
    selector: 'no-token',
    templateUrl: 'no-token-page.component.html',
    styleUrls: ['no-token-page.component.css']
})
export class NoTokenPageComponent implements OnInit {


    private isBtnActivate : string;
    constructor(private chromeService: ChromeExtensionService) { }

    ngOnInit() {
        $(document).ready(function () {
            $('.parallax').parallax();
        });

    }

    interactiveGetToken() {
        this.chromeService.interactiveGetToken();
        Materialize.toast('잠시 기다려주세요. 구글 로그인을 진행합니다.',5000);
        this.isBtnActivate = "disabled"

    }

}