import { Component} from '@angular/core';

import books from '../../data/products.json'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent{
    title = "json file fetch"
    public countryList:{name:string, code:string}[] = books;
 
}
