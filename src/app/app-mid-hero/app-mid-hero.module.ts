import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MidHeroSectionComponent } from './components/mid-hero-section/mid-hero-section.component';
import { MidHeroBtnComponent } from './components/mid-hero-btn/mid-hero-btn.component';
import { MidHeroHeadingComponent } from './components/mid-hero-heading/mid-hero-heading.component';
import { MidHeroPComponent } from './components/mid-hero-p/mid-hero-p.component';



@NgModule({
  declarations: [
    MidHeroSectionComponent,
    MidHeroBtnComponent,
    MidHeroHeadingComponent,
    MidHeroPComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppMidHeroModule { }
