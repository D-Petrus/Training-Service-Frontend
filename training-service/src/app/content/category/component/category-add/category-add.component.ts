import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../model/category';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  category!: Category;
  submitted = false;

  categoryAddForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  });

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  saveCategory() {
    const cat: Category = this.categoryAddForm.value;
    this.categoryService.addCategory(cat).subscribe(() => {
      this.categoryService.getCategoryList();
    });
    this.categoryAddForm.reset();
    this.submitted = true;
  }

  getBack() {
    this.router.navigate(['/categories']);
  }
}
