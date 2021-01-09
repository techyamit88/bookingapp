import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent implements OnInit {

  myForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        Name: '',
        Email: '',
        Contact: '',
        password: '',
        city: '',
        Gender: ''

      });
    this.myForm.valueChanges.subscribe(console.log);
  }

}
