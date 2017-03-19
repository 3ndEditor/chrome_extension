import { MockService } from '../../../shared/mock/mock.service';
import { JsonpModule } from '@angular/http';
import { ShareModule } from './editorTab/share/editorTab.share.module';
import { ExportModule } from './editorTab/export/editorTab.export.module';
import { SaveModule } from './editorTab/save/editorTab.save.module';
import { TrashCanModule } from './linkTab/trashCan/linkTab.trashCan.module';
import { TabComponent } from './tab.component';
import { LinkModule } from './linkTab/link/linkTab.link.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule,LinkModule,TrashCanModule,SaveModule,ExportModule,ShareModule,JsonpModule],
    exports: [TabComponent],
    declarations: [TabComponent],
    providers: [MockService],
})
export class TabModule { }
