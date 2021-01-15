import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
value(user: (user: any, value: any) => any, value: any): (user: any, value: any) => any {
  throw new Error('Method not implemented.');
}

constructor() { }

form: FormGroup = new FormGroup({
$key: new FormControl(''),
fullname: new FormControl('', Validators.required),
Email: new FormControl('', Validators.required),
Mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
City: new FormControl(''),
Gender: new FormControl(''),
Date: new FormControl('')

});

InitializeformGroup(){
  this.form.setValue(
    {
      $key: null,
      fullname: '',
      Email: '',
      Mobile: '',
      City: '',
      Gender: '',
      Date: ''

    }
  );
}


}



