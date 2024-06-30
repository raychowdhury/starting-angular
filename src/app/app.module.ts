import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppNavbarModule } from "./app-navbar/app-navbar.module";
import { BannerComponent } from './app-banner/banner/banner.component';
import { HeroSectionComponent } from './app-hero/components/hero-section/hero-section.component';
import { HeroHeadingComponent } from './app-hero/components/hero-heading/hero-heading.component';
import { HeroPComponent } from './app-hero/components/hero-p/hero-p.component';
import { HeroBtnComponent } from './app-hero/components/hero-btn/hero-btn.component'; 
import { SupportComponent } from './app-support/components/support/support.component';
import { SupportHeadingComponent } from './app-support/components/support-heading/support-heading.component';
import { SupportPComponent } from './app-support/components/support-p/support-p.component';
import { FeaturesComponent } from './app-features/components/features/features.component';
import { FeatureBoxComponent } from './app-features/components/feature-box/feature-box.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    HeroSectionComponent,
    HeroHeadingComponent,
    HeroPComponent,
    HeroBtnComponent,
    SupportComponent,
    SupportHeadingComponent,
    SupportPComponent,
    FeaturesComponent,
    FeatureBoxComponent,
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
