import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'invalid-url-page',
    templateUrl: 'invalid-url-page.component.html',
    styleUrls:['invalid-url-page.component.css']
    
    
    
})
export class InvalidUrlPageComponent implements OnInit {
    private alertMsg:string;
    constructor() {
        this.alertMsg = "잘못된 경로입니다."

     }
        
    ngOnInit() { 

    }

}