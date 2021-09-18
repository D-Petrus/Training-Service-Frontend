import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { course } from 'src/app/sample-data/course';
import { Course } from '../model/course';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class CourseService {

  private courseList: Course[] = course;
  // tslint:disable-next-line:variable-name
  private _email = '';
  // tslint:disable-next-line:variable-name
  private _courses: string[] = [];
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

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


  // tslint:disable-next-line:no-shadowed-variable
  addNewCourse(course: Course): void {
    this.courseList.push(course);
  }

  // getCourseList(name: string): Observable<DataResponse<Course>> {
  //   return of({results: course, count: course.length });
  // }

  getCourseList = (subcategoryName: string): Observable<Course[]> =>
    this.http.get<Course[]>(`${this.apiUrl}/courses/${subcategoryName}`)
}
