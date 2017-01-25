import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'outline',
    templateUrl: 'outline.component.html',
    styleUrls:['./outline.component.css']
})
export class OutlineComponent implements OnInit {
    
    private linkFrameSize:number=6;
    private editorSize:number = 12;
    private isActiveCrtLinkFrameBtn:boolean = true;
    constructor() { }

    public createLinkFrame():void {
        this.editorSize=6;
        this.isActiveCrtLinkFrameBtn=false;
    }

    ngOnInit() { }
}