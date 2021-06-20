import { Injectable } from '@angular/core';
import { Subcategory } from '../model/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private subcatList: Subcategory[] = [];

  constructor() { }

  addNewSubCat(subcategory:Subcategory): void {
    this.subcatList.push(subcategory);
  }
}
