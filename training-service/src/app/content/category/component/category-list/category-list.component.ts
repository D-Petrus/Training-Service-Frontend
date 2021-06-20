import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../model/category';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(){
    this.categoryService.getCategoryList().subscribe((data) => this.category = data);
  }

  goToSubcategories() {
    this.router.navigate(['/subcategories']);
  }

}
