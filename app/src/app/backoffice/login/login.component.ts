import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

  })
  }
  get f() { return this.profileForm.controls; }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.log(this.profileForm.value);
    this.submitted = true;
    console.warn(this.profileForm.value);
    if (this.profileForm.invalid) {
      return;
  }

        // stop here if form is invalid
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.profileForm.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.profileForm.reset();
}
}
