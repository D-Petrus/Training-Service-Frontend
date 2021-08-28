import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CategoryService } from './content/category/service/category.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryModule } from './content/category/category.module';
import { AboutComponent } from './pages/about/about.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ContentComponent } from './pages/content/content.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SubcategoryAddComponent } from './content/subcategory/component/subcategory-add/subcategory-add.component';
import { SubcategoryModule } from './content/subcategory/subcategory.module';
import { SubcategoryListComponent } from './content/subcategory/component/subcategory-list/subcategory-list.component';

import { CourseListComponent } from './content/course/component/course-list/course-list.component';
import { CourseModule } from './content/course/course.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MailFormComponent } from './pages/mail-form/mail-form.component';
import { SummaryComponent } from './content/summary/summary.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    SubcategoryAddComponent,
    SubcategoryListComponent,

    CourseListComponent,

    MailFormComponent,
    SummaryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CategoryModule,
    FormsModule,
    ReactiveFormsModule,
    SubcategoryModule,

    CourseModule,
    FontAwesomeModule,
    AngularFontAwesomeModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
