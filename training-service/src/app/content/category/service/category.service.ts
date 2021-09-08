import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { DataResponse } from '../model/data-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  // getCategoryList(): Observable<DataResponse<Category>> {
  //   return of({results: category, count: 4});
  // }

  getCategoryList = (): Observable<Category[]> =>
    this.http.get<Category[]>(`${this.apiUrl}/categories`)

}
