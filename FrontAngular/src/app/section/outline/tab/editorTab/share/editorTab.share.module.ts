import { SharedModule } from '../../../../../shared/shared.module';
import { ShareComponent } from './editorTab.share.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [ShareComponent],
    declarations: [ShareComponent],
    providers: []
})
export class ShareModule{

}