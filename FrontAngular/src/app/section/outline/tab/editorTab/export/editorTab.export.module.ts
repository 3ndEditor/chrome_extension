import { SharedModule } from '../../../../../shared/shared.module';
import { ExportComponent } from './editorTab.export.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [ExportComponent],
    declarations: [ExportComponent],
    providers: []

})
export class ExportModule{ }