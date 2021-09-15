import {Subcategory} from '../../subcategory/model/subcategory';

export interface Category {
  id: number;
  name: string;
  description?: string;
  subcategoryList: Subcategory[];
}
