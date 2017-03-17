import { ChromeExtensionService } from '../../shared/chrome-extension.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'no-token',
    templateUrl: 'no-token-page.component.html',
    styleUrls: ['no-token-page.component.css']
})
export class NoTokenPageComponent implements OnInit {

    constructor(private chromeService: ChromeExtensionService) { }

    ngOnInit() {
        $(document).ready(function () {
            $('.parallax').parallax();
        });

    }

    interactiveGetToken() {
        this.chromeService.interactiveGetToken()
    }

}