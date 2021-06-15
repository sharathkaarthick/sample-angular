import { Component} from '@angular/core';
import {Router} from '@angular/router'

import products from '../../data/products.json'



interface Products{
  id:string;
  name:string;
  category:string;
  img:string;
  price:string;
  description:string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent{
  
    title = "json file fetch"
    products:Products[] = products;

    pageSize=3
    pageCount=products.length

    constructor(private router:Router){}

    onSelect(products: { id: any; }){
      this.router.navigate(['/products', products.id])
    }
    
}
