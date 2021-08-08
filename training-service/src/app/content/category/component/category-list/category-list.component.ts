import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../../model/category';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  isShow = false;

  category: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(){
    this.categoryService.getCategoryList().subscribe((data) => this.category = data);
  }
  toggleDescription(show: boolean) {
    this.isShow = show;
  }
}
