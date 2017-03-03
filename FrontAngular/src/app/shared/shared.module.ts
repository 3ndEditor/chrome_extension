import { KeymapService } from './keymap/keymap.service';
import { KeymapDirective } from './keymap/keymap.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [CommonModule, FormsModule,],
    exports: [CommonModule, FormsModule, KeymapDirective ],
    declarations: [KeymapDirective],
    providers: [KeymapService],
})
export class SharedModule { }
