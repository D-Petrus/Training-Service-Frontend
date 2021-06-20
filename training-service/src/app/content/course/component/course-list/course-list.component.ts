import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  course: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void{
    this.course = this.courseService.getCourseList();
  }

}
