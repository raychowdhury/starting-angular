import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppNavbarModule } from "./app-navbar/app-navbar.module";
import { BannerComponent } from './app-banner/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppNavbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
