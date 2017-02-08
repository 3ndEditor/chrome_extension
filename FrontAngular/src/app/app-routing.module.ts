import { UserResolveService } from './user/user-resolve.service';
import { SectionComponent } from './section/section.component';
import { InvalidUrlPageComponent } from './invalid-url-page.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { OutlineComponent } from './outline/outline.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '3ndEditor',
    pathMatch: 'full'
  },
  {
    path: '3ndEditor',
    component: SectionComponent,
    children: [
      {
        path: '',
        component: OutlineComponent
      },
      {
        path: '11',
        component: HeaderComponent
      },
      {
        path: ':loginUserName',
        component: OutlineComponent,
        resolve: {
          userResolveService : UserResolveService
        }
      }
    ]
  },
  {
    path: '**',
    component: InvalidUrlPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//export const routedComponents = [NameComponent];