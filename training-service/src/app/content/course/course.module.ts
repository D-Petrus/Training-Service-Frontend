import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "src/app/app.component";
import { CourseService } from "./service/course.service";

@NgModule({
    declarations: [
      
    ],
      imports: [
          BrowserModule,
          HttpClientModule,
          FormsModule,
          ReactiveFormsModule,

      ],
      providers: [CourseService],
      bootstrap: [AppComponent]
  })
  export class CourseModule {}
  