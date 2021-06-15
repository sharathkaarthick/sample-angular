import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash'



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})


export class PaginationComponent implements OnInit{
  @Input() itemsCount!:number;
  @Input() pageSize!:number;
 // @Input() onPageChange!:()=>number ;

  constructor() {
  }
  pagesCount = this.itemsCount/this.pageSize;
  pages =  _.range(1, this.pagesCount+1)

  ngOnInit():void{
    
    this.pagesCount = Math.ceil(this.itemsCount/this.pageSize);
    this.pages =  _.range(1, this.pagesCount+1);

    
  }
    

 

}
