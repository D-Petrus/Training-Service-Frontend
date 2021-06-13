import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ContentComponent } from './pages/content/content.component';
import { CategoryListComponent } from './content/category/component/category-list/category-list.component';
import { CategoryService } from './content/category/service/category.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [CategoryService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
