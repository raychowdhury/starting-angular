import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
import { MidHeroSectionComponent } from './app-mid-hero/components/mid-hero-section/mid-hero-section.component';
import { MidHeroHeadingComponent } from './app-mid-hero/components/mid-hero-heading/mid-hero-heading.component';
import { MidHeroPComponent } from './app-mid-hero/components/mid-hero-p/mid-hero-p.component';
import { MidHeroBtnComponent } from './app-mid-hero/components/mid-hero-btn/mid-hero-btn.component';
import { AllProductsComponent } from './app-products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './app-products/components/product-details/product-details.component';
import { ProductHeadingComponent } from './app-products/components/product-heading/product-heading.component';
import { ViewAllProductComponent } from './app-products/components/view-all-product/view-all-product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { DonateComponent } from './donate/donate.component';



//Define route

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Shop', component: ShopComponent},
  {path: 'Donate', component: DonateComponent},

]

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
    MidHeroSectionComponent,
    MidHeroHeadingComponent,
    MidHeroPComponent,
    MidHeroBtnComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    ProductHeadingComponent,
    ViewAllProductComponent,
    ContactComponent,
    AboutComponent,
    ShopComponent,
    DonateComponent
    
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppNavbarModule,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
