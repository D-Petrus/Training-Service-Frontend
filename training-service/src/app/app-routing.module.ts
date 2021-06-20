import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './content/category/component/category-list/category-list.component';
import { AboutComponent } from './pages/about/about.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'about', component: AboutComponent},
  { path: '', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
