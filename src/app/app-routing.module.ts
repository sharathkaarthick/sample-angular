import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:"", redirectTo:'/products', pathMatch:'full'},
  {path:"products", component:CourseComponent },
  {path:'products/:id', component:ProductDetailsComponent},
  {path:'**',redirectTo:'/not-found'},
  {path:"not-found", component:PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CourseComponent, ProductDetailsComponent, PageNotFoundComponent]
