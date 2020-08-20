import { ProprietaireserviceService } from './../proprietaireservice.service';
import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import { Validators} from "@angular/forms";
@Component({
  selector: 'app-propri-addform',
  templateUrl: './propri-addform.component.html',
  styleUrls: ['./propri-addform.component.scss']
})
export class PropriAddformComponent implements OnInit {
  // profileForm: FormGroup;
  // submitted = true;
  public isCreate = true;
  public response: boolean;
  public propForm: FormGroup = this.fb.group({

    name: [''],
    adresse: [''],
    ville: [''],
    telephone: [''],

  });
  constructor(private fb: FormBuilder, private service: ProprietaireserviceService) { }
departments=[
  {id: 3, value: 'Dep1'},
  {id: 2, value: 'Dep2'},
  {id: 3, value: 'Dep3'},
]
  ngOnInit() {
    this.isCreate = true;
  //   this.propForm = this.fb.group({
  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],

  // })
  }
  // get f() { return this.propForm.controls; }
  onCreate() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
    let prop = this.propForm.value;
    console.log(prop);
    // this.submitted = false;

        // stop here if form is invalid

  }
}
