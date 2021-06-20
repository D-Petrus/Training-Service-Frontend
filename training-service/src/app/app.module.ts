import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ContentComponent } from './pages/content/content.component';
import { CategoryService } from './content/category/service/category.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './pages/footer/footer.component';
import { CategoryModule } from './content/category/category.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';

import { SubcategoryAddComponent } from './content/subcategory/component/subcategory-add/subcategory-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubcategoryModule } from './content/subcategory/subcategory.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    AddContactPage
    ContactComponent,
    SubcategoryAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CategoryModule,
    SubcategoryModule,
    AddContactPage
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
