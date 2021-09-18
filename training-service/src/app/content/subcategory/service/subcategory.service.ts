import {Injectable} from '@angular/core';
import {Subcategory} from '../model/subcategory';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {Category} from '../../category/model/category';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getSubcategoryList = (categoryName: string): Observable<Subcategory[]> =>
    this.http.get<Category[]>(`${this.apiUrl}/categories/${categoryName}`).pipe(
      map(categories => categories[0]),
      map((category: Category) => category?.subcategoryList),
    )

}
