import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course/service/course.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

coursesSelected: string[] = [];
email: string = '';

constructor(private courseService: CourseService) {
}

ngOnInit(): void {
  this.coursesSelected = this.courseService.courses;
  this.email = this.courseService.email;
}

}
