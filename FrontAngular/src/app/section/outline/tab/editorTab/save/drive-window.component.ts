import { ChromeExtensionService } from '../../../../../shared/chrome-extension.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'drive-window',
    templateUrl: 'drive-window.component.html',
    styleUrls: ['drive-window.component.css']
})
export class DriveWindowComponent implements OnInit {

    private isOpen: boolean = false;
    private files: Array<Object>;
    private isActiveSearch: boolean;

    @Output() closeDriveWindow = new EventEmitter();
    constructor(private chromeService: ChromeExtensionService) {
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

        this.closeDriveWindow.emit()
    }

}