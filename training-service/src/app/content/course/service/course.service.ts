import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { course } from 'src/app/sample-data/course';
import { DataResponse } from '../../category/model/data-response';
import { Course } from '../model/course';

@Injectable()
export class CourseService {

  private courseList: Course[] = course;
  private _email: string = '';
  private _courses: string[] = [];

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get courses(): string[] {
    return this._courses;
  }

  set courses(value: string[]) {
    this._courses = value;
  }


  addNewCourse(course:Course): void {
    this.courseList.push(course);
  }

  getCourseList(name: string): Observable<DataResponse<Course>> {
    return of({results: course, count: course.length });
  }
}
