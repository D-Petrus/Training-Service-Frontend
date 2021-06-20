import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { course } from 'src/app/sample-data/course';
import { Course } from '../model/course';

@Injectable()
export class CourseService {

  private courseList: Course[] = course;

  addNewCourse(course:Course): void {
    this.courseList.push(course);
  }

  getCourseList(): Course[] {
    return this.courseList;
  }
}
