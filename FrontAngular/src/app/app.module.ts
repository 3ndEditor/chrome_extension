import { AuthGuard } from './auth-guard/auth-guard.service';
import { CanDeactivateGuard } from './auth-guard/can-deactivate-guard.service';
import { HeaderModule } from './header/header.module';
import { OutlineModule } from './outline/outline.module';
import { AppRoutingModule } from './app-routing.module';
import { EditorModule } from './editor/editor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    OutlineModule,
    JsonpModule,
    HeaderModule,
    // 앵귤라에 최적화된 마테리얼 디자인을 쓸 수 있으나 아직 베타버전이고 성능이 구짐. 나중에 좋아지면 적용하자.
    // MaterialModule.forRoot()

    

  ],
  providers: [AuthGuard,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
