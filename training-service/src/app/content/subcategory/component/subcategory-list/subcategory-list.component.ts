import { Component, Input, OnInit } from '@angular/core';
import { Subcategory } from '../../model/subcategory';
import { SubcategoryService } from '../../service/subcategory.service';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubcategoryListComponent implements OnInit {

  @Input() name: string = '';
  subcat: Subcategory[] = [];

  constructor(private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    console.log(this.name);
    // this.subcategoryService.getSubcategoryList(p['name']).subscribe((data) => this.subcat = data)
  }

}
