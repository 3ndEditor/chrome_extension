import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KeySetting, SettingKeymapComponent } from './setting-keymap.component';
import { SettingComponent } from './setting.component';
import { ShareModule } from '../outline/tab/editorTab/share/editorTab.share.module';

import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';




@NgModule({
    imports: [SharedModule,RouterModule],
    exports: [SettingComponent,SettingKeymapComponent],
    declarations: [SettingComponent,SettingKeymapComponent,KeySetting],
    providers: [],
})
export class SettingModule { }