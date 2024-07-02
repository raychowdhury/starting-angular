import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductHeadingComponent } from './components/product-heading/product-heading.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ViewAllProductComponent } from './components/view-all-product/view-all-product.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductHeadingComponent,
    ProductDetailsComponent,
    AllProductsComponent,
    ViewAllProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppProductsModule { }
