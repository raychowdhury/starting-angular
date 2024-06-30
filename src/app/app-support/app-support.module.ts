import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './components/support/support.component';
import { SupportHeadingComponent } from './components/support-heading/support-heading.component';
import { SupportPComponent } from './components/support-p/support-p.component';



@NgModule({
  declarations: [
    SupportComponent,
    SupportHeadingComponent,
    SupportPComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppSupportModule { }
