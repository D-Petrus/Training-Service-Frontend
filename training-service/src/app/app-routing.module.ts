import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './content/category/component/category-add/category-add.component';
import { CategoryListComponent } from './content/category/component/category-list/category-list.component';

import { AboutComponent } from './pages/about/about.component';

import { ContactComponent } from './pages/contact/contact.component';
import { SubcategoryAddComponent } from './content/subcategory/component/subcategory-add/subcategory-add.component';

import { ContentComponent } from './pages/content/content.component';

import { CourseListComponent } from './content/course/component/course-list/course-list.component';
import { MailFormComponent } from './pages/mail-form/mail-form.component';
import { SummaryComponent } from './content/summary/summary.component';
import { CategoryNameComponent } from './content/category/component/category-name/category-name.component';
import { SubcategoryComponent } from './content/subcategory/component/subcategory/subcategory.component';


const routes: Routes = [
  { path: 'category', component: CategoryListComponent },
  { path: 'category/add', component: CategoryAddComponent },
  { path: 'category/:name', component: CategoryNameComponent },
  { path: 'subcategory', component: SubcategoryComponent },
  { path: 'subcategory/add', component: SubcategoryAddComponent },
  { path: 'subcategory/:name', component: SubcategoryComponent },
  { path: 'courses/:name', component: CourseListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
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
