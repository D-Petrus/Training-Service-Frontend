import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { course } from 'src/app/sample-data/course';
import { environment } from 'src/environments/environment';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseList: Course[] = course;

  addNewCourse(course:Course): void {
    this.courseList.push(course);
  }

  getCourseList(): Course[] {
    return this.courseList;
  }
}
