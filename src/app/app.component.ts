import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  phonenum=""
  emailid=""

  registerForm = this.fb.group({
    phonenum: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    emailid: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) { }


}
