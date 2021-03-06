import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "src/app/app.component";
import { MailFormComponent } from "src/app/pages/mail-form/mail-form.component";
import { CourseListComponent } from "./component/course-list/course-list.component";
import { CourseService } from "./service/course.service";

@NgModule({
    declarations: [
      CourseListComponent,
      MailFormComponent
    ],
    exports: [CourseListComponent],
    imports: [
          BrowserModule,
          HttpClientModule,
          FormsModule,
          ReactiveFormsModule
    ],
      providers: [CourseService],
      bootstrap: [AppComponent]
  })
  export class CourseModule {}
