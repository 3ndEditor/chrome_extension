import { Keymap } from '../../../../../shared/keymap/keymap.provider';
import { animate, Component, OnInit, state, style, transition, trigger } from '@angular/core';

@Component({
    selector:"export",
    templateUrl : 'editorTab.export.component.html',
    styleUrls:['editorTab.export.component.css'],
})
export class ExportComponent{
    /**
    * @file editorTab.export.component.ts
    * @author KimTaemin 17/02/09
    * @brief Exporting PDF File
    * @see Need to translate img, since copyright.
    * @todo intersect with server
    */

    private isExportActive: boolean;
    constructor(private keymap: Keymap) {
        this.isExportActive = false;   
    }

    openExportBoard() {
        this.isExportActive = this.isExportActive ? false : true;
        console.log("openExport클릭됨")
    }
}