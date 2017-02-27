import { Component } from '@angular/core';

@Component({
    selector:"add",
    templateUrl:'linkTab.add.component.html',
    styleUrls:['linkTab.add.component.css']
})
export class AddComponent{
    /**
    * @file linkTab.add.component.ts
    * @author KimTaemin 17/02/08
    * @brief to add Link
    * @see 
    * @todo intersect with server, make method
    */
    addURL() {
        console.log("addURL클릭됨")
    }
}