import { DriveWindowComponent } from './drive-window.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { SaveComponent } from './editorTab.save.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [SharedModule],
    exports: [SaveComponent],
    declarations: [SaveComponent],
    providers: [],
})
export class SaveModule { }
