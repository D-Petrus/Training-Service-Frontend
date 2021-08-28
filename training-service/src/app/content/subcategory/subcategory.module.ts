import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SubcategoryAddComponent } from './component/subcategory-add/subcategory-add.component';
import { SubcategoryListComponent } from './component/subcategory-list/subcategory-list.component';
import { SubcategoryNameComponent } from './component/subcategory-name/subcategory-name.component';
import { SubcategoryComponent } from './component/subcategory/subcategory.component';


@NgModule({
  declarations: [
    SubcategoryComponent,
    SubcategoryListComponent,
    SubcategoryNameComponent,
    SubcategoryAddComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
  ]
})
export class SubcategoryModule { }
