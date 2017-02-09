import { CanDeactivateGuard } from './header/auth-guard/can-deactivate-guard.service';
import { AuthGuard } from './header/auth-guard/auth-guard.service';
import { SectionModule } from './section/section.module';
import { InvalidUrlPageComponent } from './invalid-url-page.component';
import { LoginUserService } from './user/user';
import { UserResolveService } from './user/user-resolve.service';


import { HeaderModule } from './header/header.module';

import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,InvalidUrlPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HeaderModule,
    SectionModule,
    JsonpModule
    // 앵귤라에 최적화된 마테리얼 디자인을 쓸 수 있으나 아직 베타버전이고 성능이 구짐. 나중에 좋아지면 적용하자.
    // MaterialModule.forRoot()
    
    

  ],
  providers: [AuthGuard,CanDeactivateGuard ,UserResolveService,LoginUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
