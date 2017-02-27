import { Component } from '@angular/core';
@Component({
    selector:"trash-can",
    templateUrl:'linkTab.trashCan.component.html',
    styleUrls:['linkTab.trashCan.component.css']
})
export class TrashCanComponent{
    /**
    * @file linkTab.trashCan.component.ts
    * @author KimTaemin 17/02/08
    * @brief to discard Link
    * @see 
    * @todo intersect with server, make method
    */
    openTrashCanBoard(){
        console.log("TrashCan이 클릭됨")
    }
}