import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubcategoryListComponent } from './component/subcategory-list/subcategory-list.component';
import { SubcategoryAddComponent } from './component/subcategory-add/subcategory-add.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SubcategoryListComponent,
    SubcategoryAddComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SubcategoryModule { }
