import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './content/category/component/category-add/category-add.component';
import { CategoryListComponent } from './content/category/component/category-list/category-list.component';
import { SubcategoryAddComponent } from './content/subcategory/component/subcategory-add/subcategory-add.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/add', component: CategoryAddComponent },
  { path: 'subcategory/add', component: SubcategoryAddComponent },
  { path: '', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
