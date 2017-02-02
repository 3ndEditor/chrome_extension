import { LinkModule } from '../linkTab/link/linkTab.link.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [CommonModule,LinkModule],
    exports: [linkTabComponent],
    declarations: [linkTabComponent],
    providers: [],
})
export class linkTabModule { }
