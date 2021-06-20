import { Injectable } from '@angular/core';
import { Subcategory } from '../model/subcategory';
import { subcategory } from '../../../sample-data/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private subcatList: Subcategory[] = subcategory;

  addNewSubCat(subcat:Subcategory): void {
    this.subcatList.push(subcat);
  }

  getSubcatList(): Subcategory[] {
    return this.subcatList;
  }
}
