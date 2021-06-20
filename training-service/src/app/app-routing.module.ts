import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './content/category/component/category-add/category-add.component';
import { CategoryListComponent } from './content/category/component/category-list/category-list.component';

import { AboutComponent } from './pages/about/about.component';

import { ContactComponent } from './pages/contact/contact.component';
import { SubcategoryAddComponent } from './content/subcategory/component/subcategory-add/subcategory-add.component';
import { SubcategoryListComponent } from './content/subcategory/component/subcategory-list/subcategory-list.component';

import { ContentComponent } from './pages/content/content.component';

import { Cours
import { MailFormComponent } from './pages/mail-form/mail-form.component';
import { SummaryComponent } from './content/summary/summary.component';


const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'about', component: AboutComponent},
  { path: 'categories/add', component: CategoryAddComponent },
  { path: 'subcategories', component: SubcategoryListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'subcategory/add', component: SubcategoryAddComponent },

  { path: 'course' , component: CourseListComponent},


  { path: 'mail', component: MailFormComponent },
  { path: 'summary', component: SummaryComponent },

  { path: '', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
