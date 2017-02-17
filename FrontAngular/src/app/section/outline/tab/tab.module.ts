import { JsonpModule } from '@angular/http';
import { AddModule } from './linkTab/add/linkTab.add.module';
import { ShareModule } from './editorTab/share/editorTab.share.module';
import { ExportModule } from './editorTab/export/editorTab.export.module';
import { SaveModule } from './editorTab/save/editorTab.save.module';
import { TrashCanModule } from './linkTab/trashCan/linkTab.trashCan.module';
import { TabComponent } from './tab.component';
import { LinkModule } from './linkTab/link/linkTab.link.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule,AddModule,LinkModule,TrashCanModule,SaveModule,ExportModule,ShareModule,JsonpModule],
    exports: [TabComponent],
    declarations: [TabComponent],
    providers: [],
})
export class TabModule { }
