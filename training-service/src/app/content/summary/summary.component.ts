import {Component, OnInit} from '@angular/core';
import { CourseService } from '../course/service/course.service';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit{
  faCheck = faCheck;

coursesSelected: string[] = [];
email = '';

constructor(private courseService: CourseService, private router: Router) {
}

ngOnInit(): void {
  this.coursesSelected = this.courseService.courses;
  this.email = this.courseService.email;
}

}
