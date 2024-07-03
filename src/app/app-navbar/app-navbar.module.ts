import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LogoComponent,
    NavMenuComponent,
    MainNavbarComponent
  ],
  exports: [
    MainNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppNavbarModule { }
