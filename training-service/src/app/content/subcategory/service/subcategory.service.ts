import { Injectable } from '@angular/core';
import { Subcategory } from '../model/subcategory';
import { subcategory } from '../../../sample-data/subcategory';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private subcatList: Subcategory[] = subcategory;
  private readonly apiUrl: string = environment.apiUrl;

  msgTrue = false;

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  constructor(private http: HttpClient) {}

  addNewSubCat(subcat:Subcategory): void {
    this.subcatList.push(subcat);
  }


  getSubcategoryList = (): Observable<Subcategory[]> =>
    this.http.get<Subcategory[]>(`${this.apiUrl}/subcategories`);
}
