import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { course } from 'src/app/sample-data/course';
import { DataResponse } from '../../category/model/data-response';
import { Course } from '../model/course';

@Injectable()
export class CourseService {

  private courseList: Course[] = course;

  addNewCourse(course:Course): void {
    this.courseList.push(course);
  }

  getCourseList(name: string): Observable<DataResponse<Course>> {
    return of({results: course, count: course.length });
  }
}
