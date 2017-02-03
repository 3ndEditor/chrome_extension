import { Component } from '@angular/core';


@Component({
    selector:"link",
    templateUrl : 'linkTab.link.component.html', 
    styleUrls:['linkTab.link.component.css']
})
export class LinkComponent {
    private isfixed:boolean;
    private fixedRanking:number;
    private unfixedRanking:number;
    constructor(private url:string, private fixed:any[], private trushed:boolean){
        this.isfixed = fixed[0];
        this.isfixed ? this.fixedRanking = fixed[1] : this.unfixedRanking = fixed[1];
    }
}