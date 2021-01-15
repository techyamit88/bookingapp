import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import {UserServiceService} from '../../Shared/user-service.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UserServiceService) { }
  user: any;

  ngOnInit() {

    // this.service.form = new FormGroup({
     // $key: new FormControl(''),
      // fullname: new FormControl(''),
      // Email: new FormControl(''),
      // Mobile: new FormControl(''),
      // City: new FormControl(''),
      // Gender: new FormControl(''),
      // Date: new FormControl('')
    // });

  }
  onClear(){
    this.service.form.reset();
    this.service.InitializeformGroup();
  }

  OnSubmit(){
    console.log(this.service.form.value);
    if
(this.service.form.valid)
{
alertify.success('Congrats, you login');
}
else
{
  alertify.error('fill the details');

}

  }


  }


