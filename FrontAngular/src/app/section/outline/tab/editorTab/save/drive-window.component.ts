import { ChromeExtensionService } from '../../../../../shared/chrome-extension.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer } from '@angular/core';
declare var $: any;
@Component({
    selector: 'drive-window',
    templateUrl: 'drive-window.component.html',
    styleUrls: ['drive-window.component.css']
})
export class DriveWindowComponent implements OnInit {
    private newFileName: string;
    private isOpen: boolean = false;
    private files: Array<Object>;
    private isActiveSearch: boolean;
    private isSelectedTab: number = 1;
    private isCompletedGetList: boolean = false;
    @Input() editorElement: ElementRef;
    constructor(private chromeService: ChromeExtensionService, private renderer: Renderer) {
        this.isActiveSearch = false;
        this.files = [{
            iconLink: "",
            id: "",
            name: "",
            webContentLink: ""
        }];
    }

    ngOnInit() {

        this.files = [];
        for (let i = 0; i < 20; i++) {
            this.files.push({
                name: i
            })
        }
        this.isCompletedGetList = true;
    }

    // ngAfterContentChecked() {
    //     if ((this.isOpen !== this.chromeService.isDriveWindowOpen) && !(this.isOpen)) {
    //         this.isOpen = this.chromeService.isDriveWindowOpen;
    //         let that = this;
    //         this.chromeService.getFileList().then((result) => {
    //             console.log(result)
    //             that.files = result;
    //         })
    //     }
    // }
    ngAfterContentInit() {

    }
    ActiveSearch() {
        this.isActiveSearch = this.isActiveSearch === false ? true : false;
    }

    closeWindow() {
        $('#driveWindow').modal('close');
    }
    insertFileContent(file) {
        this.chromeService.getFileContent(file).then(result => {
            console.log("drivewindow" + result);
            this.renderer.selectRootElement(this.editorElement.nativeElement).insertAdjacentHTML('beforeend', result)
        }).then(() => {
            $('#driveWindow').modal('close');
        })
    }

    // 에디터에 있는 내용으로 파일 생성해보기 
    createFile() {

        let requestBody = {
            name: this.newFileName,
        }
        //https://developers.google.com/drive/v3/reference/files/create 참고 
        // var contentBlob = new Blob([this.contentOnEditor], {
        //     type: 'text/html',
        // });
        this.chromeService.createFileWithMetaData(requestBody).then(() => {
            this.renderer.selectRootElement(this.editorElement.nativeElement).insertAdjacentHTML('beforeend', "새 파일");
            $('#driveWindow').modal('close');
        })
    }
    clickNewTab() {
        this.isSelectedTab = 1;
    }
    clickExistTab() {
        this.isSelectedTab = 2;
        let that = this;
        this.chromeService.getFileList().then((result) => {
            that.files = result;
            that.isCompletedGetList = true;
        })

    }
    fileIconSource(fileMimeType) {

    }

}