import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProprietaireserviceService {

  constructor(private http: HttpClient) { }
  // form: FormGroup = new FormGroup({
  //   $key: new FormControl(null),
  //   fullName: new FormControl(''),
  //   email: new FormControl(''),
  //   mobile: new FormControl(''),
  //   city: new FormControl(''),
  //   gender: new FormControl(''),
  //   department : new FormControl(0),
  //   hireDate : new FormControl(''),
  //   isPermanent : new FormControl(false),
  // })
}
