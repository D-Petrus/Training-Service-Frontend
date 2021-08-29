import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../../model/course';
import { CourseService } from '../../service/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() name: string = '';

  goToSummary: string = '/summary';
  selectedCourses: string[] = [];
  course: Course[] = [];

  private patternEmail: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  mailForm = new FormGroup({
    emailAddress: new FormControl("", [
      Validators.required,
      Validators.pattern(this.patternEmail)
    ])
  });

  constructor(private courseService: CourseService, private route: Router) { }

  ngOnInit() {
    this.courseService.getCourseList(this.name).subscribe(data => {
      this.course = data.results;
    });
  }

  convertDurationToTime = (item: number) => item * 1000;


  courseClick = (event: any, name: string) => {
    if (event.target.checked) {
      this.selectedCourses.push(name);
      console.log(name);
    } else {
      this.selectedCourses = this.selectedCourses.filter(a => a!== name);
    }
    console.log(this.selectedCourses);
  }

  onEmailSubmit = (event: any) => {
    this.courseService.courses = this.selectedCourses;
    this.courseService.email = event['email'];
    this.route.navigate([this.goToSummary]);
  }

}
