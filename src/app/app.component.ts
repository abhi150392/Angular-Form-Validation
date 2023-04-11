import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') signUpForm: NgForm;
  exampleEmail: string = 'aaaaa@email.com';
  defaultName: string = 'your name';
  defaultValue: string = 'teacher';
  genders = ['male', 'Female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    // console.log(this.signUpForm);
    this.signUpForm.reset();
  }
}
