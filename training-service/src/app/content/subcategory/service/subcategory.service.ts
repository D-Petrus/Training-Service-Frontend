import { Injectable } from '@angular/core';
import { Subcategory } from '../model/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private subcatList: Subcategory[] = [];

  addNewSubCat(subcategory:Subcategory): void {
    this.subcatList.push(subcategory);
  }
}
