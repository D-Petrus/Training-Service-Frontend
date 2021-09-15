import { Component, Input, OnInit } from '@angular/core';
import { Subcategory } from '../../model/subcategory';
import { SubcategoryService } from '../../service/subcategory.service';
import {Course} from '../../../course/model/course';
import {CourseService} from '../../../course/service/course.service';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubcategoryListComponent implements OnInit {

  @Input() name = '';
  subcat: Subcategory[] = [];
  courses: Course[] = [];

  constructor(private subcategoryService: SubcategoryService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.subcategoryService.getSubcategoryList(this.name).subscribe(subcategories => {
      console.log(subcategories);
      this.subcat = subcategories;
    });
  }

  subcategorySelect = (subcategoryName: string) => {
    this.courseService.getCourseList(subcategoryName).subscribe(data => {
      console.log(data);
      this.courses = data;
    });
  }

}
