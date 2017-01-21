import { OutlineModule } from './outline/outline.module';
import { OutlineComponent } from './outline/outline.component';
import { AppRoutingModule } from './app-routing.module';
import { EditorComponent } from './editor/editor.component';
import { EditorModule } from './editor/editor.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, OutlineModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
