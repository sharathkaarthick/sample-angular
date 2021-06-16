import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  public productId: any;

  ngOnInit(){
    this.route.params.subscribe(params =>{ this.productId = params['id']});
  }

}
