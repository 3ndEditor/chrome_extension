import { HeaderModule } from './header/header.module';
import { OutlineModule } from './outline/outline.module';
import { AppRoutingModule } from './app-routing.module';
import { EditorModule } from './editor/editor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

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
    HeaderModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
