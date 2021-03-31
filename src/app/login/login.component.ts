import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  accno = "";
  pswd = "";
  constructor(private router: Router, private dataservice: DataService, private fb: FormBuilder) { }

  loginForm = this.fb.group({
    accno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(9), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  });


  getAccNo(event: any) {
    this.accno = event.target.value;
    console.log(this.accno);
  }
  getPassword(event: any) {
    this.pswd = event.target.value;
    console.log(this.pswd);
  }
  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {
      var accNumber = this.loginForm.value.accno
      console.log(accNumber)
      var pwd = this.loginForm.value.pswd;
      console.log(pwd);
      var result = this.dataservice.login(accNumber, pwd)
      if (result) {
        this.router.navigateByUrl("dashboard");
      }
    }
    else {
      alert("ivalid forms")
    }

  }
  }