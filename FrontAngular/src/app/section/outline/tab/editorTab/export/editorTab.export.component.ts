import { Observable, Subject } from 'rxjs/Rx';
import { handleError } from '../../../../../async-handling.promise';
import { Http, Jsonp, ResponseContentType, URLSearchParams } from '@angular/http';
import { animate, Component, ElementRef, OnInit, Renderer, state, style, transition, trigger } from '@angular/core';

declare var jsPDF: any;


@Component({
    selector: "export",
    templateUrl: 'editorTab.export.component.html',
    styleUrls: ['editorTab.export.component.css']
})
export class ExportComponent {
    /**
    * @file editorTab.export.component.ts
    * @author KimTaemin 17/02/09
    * @brief Exporting PDF File
    * @see Need to translate img, since copyright.
    * @todo intersect with server
    */

    private isExportActive: boolean;
    constructor(private jsonp: Jsonp, private http: Http, private el: ElementRef, private renderer: Renderer) {
        this.isExportActive = false;
    }

    openExportBoard() {
        this.isExportActive = this.isExportActive ? false : true;
        console.log("openExport클릭됨")
    }



    exportPDF() {
        var doc = new jsPDF()
        doc.setFontSize(40);
        doc.text(35, 25, "Octonyan loves jsPDF");
    }
}




