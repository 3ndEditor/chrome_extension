import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'invalid-url-page',
    template: `
       <h1> {{alertMsg}} </h1>
       
       <a routerLink="">돌아가기</a>
    
    
    `
})
export class InvalidUrlPageComponent implements OnInit {
    private alertMsg:string;
    constructor() {
        this.alertMsg = "잘못된 경로입니다."

     }
        
    ngOnInit() { 

    }

}