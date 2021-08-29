import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course/service/course.service';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  faCheck = faCheck;

coursesSelected: string[] = [];
email: string = '';

constructor(private courseService: CourseService) {
}

ngOnInit(): void {
  this.coursesSelected = this.courseService.courses;
  this.email = this.courseService.email;
}

}
