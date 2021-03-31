import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname = "";
  accno = "";
  pswd = "";

  constructor(private dataservice: DataService, private router: Router, private fb: FormBuilder) { }
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    accno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(9), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  });
  ngOnInit(): void {
  }
  register() {
    if (this.registerForm.valid) {
      var result = this.dataservice.register(this.registerForm.value.accno, this.registerForm.value.uname, this.registerForm.value.pswd)
      if (result) {

        this.router.navigateByUrl("")
      }
      else {
        this.router.navigateByUrl("")
      }
    }
    else {
      alert("invalid form")
    }

  }
}
