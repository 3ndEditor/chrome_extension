import { TabComponent } from './tab.component';
import { LinkModule } from '../linkTab/link/linkTab.link.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [CommonModule,LinkModule],
    exports: [TabComponent],
    declarations: [TabComponent],
    providers: [],
})
export class linkTabModule { }
