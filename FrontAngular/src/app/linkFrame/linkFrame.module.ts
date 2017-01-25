import { linkTabComponent } from '../linkTab/linkTab.component';
import { linkTabModule } from '../linkTab/linkTab.module';
import { CommonModule } from '@angular/common';
import { Jsonp } from '@angular/http';
import { LinkFrameService } from './linkFrame.service.promise';
import { linkFrameComponent } from './linkFrame.component';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [linkTabModule, CommonModule],
    exports: [linkFrameComponent],
    declarations: [linkFrameComponent],
    providers: [LinkFrameService],
})
export class linkFrameModule { }
