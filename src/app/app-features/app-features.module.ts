import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './components/features/features.component';
import { FeatureBoxComponent } from './components/feature-box/feature-box.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    FeatureBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppFeaturesModule { }
