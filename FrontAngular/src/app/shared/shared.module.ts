import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {KeymapDirective} from '/keymap/keymap.provider';
import {KeymapProvider} from '/keymap/keymap.directive'


@NgModule({
    imports: [CommonModule,FormsModule,],
    exports: [CommonModule,FormsModule,KeymapDirective],
    declarations: [KeymapDirective],
    providers: [KeymapProvider],
})
export class SharedModule { }
