import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './content/category/component/category-list/category-list.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: '', component: ContentComponent },
  { path: '**', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
