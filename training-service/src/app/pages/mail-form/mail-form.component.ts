import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.scss']
})
export class MailFormComponent {

  @Output() mailSubmit: EventEmitter<{email: string}> = new EventEmitter();

  private patternEmail: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  mailForm = new FormGroup({
    emailAddress: new FormControl("", [
      Validators.required,
      Validators.pattern(this.patternEmail)
    ])
  });

  submit = () => this.mailSubmit.emit({email: this.mailForm.controls['emailAddress'].value});
}
