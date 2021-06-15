import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './product/product.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
 
    ProductComponent,
      PaginationComponent,
      ProductDetailsComponent,
      PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
