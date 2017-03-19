import { NoTokenPageComponent } from './error-page/no-token-page.component';
import { SettingModule } from './setting/setting.module';
import { OutlineModule } from './outline/outline.module';
import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { InvalidUrlPageComponent } from './error-page/invalid-url-page.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [SectionRoutingModule,OutlineModule,SettingModule],
    exports: [SectionComponent,InvalidUrlPageComponent,NoTokenPageComponent],
    declarations: [SectionComponent,InvalidUrlPageComponent,NoTokenPageComponent],
    providers: [],
})
export class SectionModule { }
