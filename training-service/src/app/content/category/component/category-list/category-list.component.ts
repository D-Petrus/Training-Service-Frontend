import {Component, Input, OnInit} from '@angular/core';
import { Category } from '../../model/category';
import { CategoryService } from '../../service/category.service';
import {OfferSendService} from '../../../offer/service/offer-send.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  @Input() name = '';

  categories: Category[] = [];

  constructor(private categoryService: CategoryService,
              private offerService: OfferSendService) {}

  ngOnInit(): void{
    this.categoryService.getCategoryList().subscribe(categories => {
      this.categories = categories;
    });
  }
  selectCategory = (categoryName: string) => this.offerService._categoryName = categoryName;
}
