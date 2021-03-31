import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails: any = {

    1000: { acno: 1000, balance: 10000, username: "anvika", password: "testuser" },
    1001: { acno: 1001, balance: 20000, username: "ayaan", password: "testuser1" },
    1002: { acno: 1002, balance: 25000, username: "aparna", password: "testuser2" }

  }

  currentUser: any;

   constructor() 
  {
   this.getDetails()
   }
saveDetails(){
  localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
  if(this.currentUser){
localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
}
getDetails(){
  if(localStorage.getItem("accountDetails")){
    this.accountDetails=JSON.parse(localStorage.getItem("accountDetails")||'')
  }
  if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  }
}


 
  register(acno: any, username: any, password: any) {
    if (acno in this.accountDetails) {
      alert("user already exists . please login!");
      return false;
    }
this.saveDetails();
    this.accountDetails[acno] = {
      acno,
      balance: 0,
      username,
      password
    }
    
    alert("registeration successfull");
    console.log(this.accountDetails);
    return true;
  }
  login(accno: any, pwd: any) {
    let dataset = this.accountDetails;
    if (accno in dataset) {
      var pswd1 = dataset[accno].password
      if (pswd1 == pwd) {
        this.currentUser = dataset[accno].username;
    
        alert("login successfull")
        this.saveDetails();
        return true
      }
      else {
        alert("incorrect password")
        return false
      }
    }

    else {
      alert("no user exist with this account number")
      return false
    }
  }
  deposit(accno: any, pwd: any, amount: any) {
    var amt=parseInt(amount);
    let dataset = this.accountDetails;
    if (accno in dataset) {
      var pswd1 = dataset[accno].password
      if (pswd1 == pwd) {
        dataset[accno].balance+=amt
        this.saveDetails();
        alert("your account is credited with amount:"+amount+" "+" and your new balance is"+dataset[accno].balance)
    
      }
      else {
        alert("incorrect credentials")
        
      }
    }
    else{
      alert("invalid credentials")
     
    }
  }
  withdrawal(accno: any, pwd: any, amount: any){
    
    var amt=parseInt(amount);
    let dataset = this.accountDetails;
    var amnt=dataset[accno].balance
    if (accno in dataset) {
      var pswd1 = dataset[accno].password
      if (pswd1 == pwd) {
        if(amnt>=amt){
          amnt-=amt
          this.saveDetails();
          alert("your account is debited with amount:"+amt+" "+" and your new balance is:"+amnt)
        }
      
      else {
        alert("low balance")
      }
      }
    }
    else{
      alert("invalid credentials")
     
    }
  }
}



