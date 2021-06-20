import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "src/app/app.component";
import { CourseListComponent } from "./component/course-list/course-list.component";

@NgModule({
    declarations: [
      
    ],
      imports: [
          BrowserModule,
          HttpClientModule,
          FormsModule,
          ReactiveFormsModule,
      ],
      providers: [],
      bootstrap: [AppComponent]
  })
  export class CourseModule {}
  