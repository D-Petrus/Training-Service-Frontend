import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { category } from 'src/app/sample-data/category';
import { environment } from 'src/environments/environment';
import { CategoryListComponent } from '../component/category-list/category-list.component';
import { Category } from '../model/category';
import { DataResponse } from '../model/data-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getCategoryList(): Observable<DataResponse<Category>> {
    return of({results: category, count: 4})
  };

}
