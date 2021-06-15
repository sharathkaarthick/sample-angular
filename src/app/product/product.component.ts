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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent{
  
    title = "json file fetch"
    products:Products[] = products;

    pageSize=3
    pageCount=products.length

    constructor(private router:Router){}

   
    
}
