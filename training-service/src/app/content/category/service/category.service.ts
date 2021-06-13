import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCategoryList = (): Observable<Category[]> =>
    this.http.get<Category[]>(`${this.apiUrl}/categories`);
}
