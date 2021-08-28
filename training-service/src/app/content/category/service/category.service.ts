import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { category } from 'src/app/sample-data/category';
import { environment } from 'src/environments/environment';
import { CategoryListComponent } from '../component/category-list/category-list.component';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = category;

  getCategoryList = (): Category[] => this.categories;

  addCategory = (category: Category) => this.categories.push(category);

}
