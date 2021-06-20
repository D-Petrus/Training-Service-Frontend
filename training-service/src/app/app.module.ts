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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MailFormComponent } from './pages/mail-form/mail-form.component';

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
    MailFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CategoryModule,
    FormsModule,
    ReactiveFormsModule,
    SubcategoryModule,
    FontAwesomeModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
