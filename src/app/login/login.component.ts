import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

username:any = 'lotus';
password:any = '123456';

user1:any = 'oxymx';
password1:any = '123456';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(data:any) {
   
   if(data.username == this.username  && data.password == this.password ){

    this.router.navigate(['/dashboard']);
   }
   else if(data.username == this.user1  && data.password == this.password1){
    this.router.navigate(['/dashboard']);
   }
   else{
    alert("Entered Credentials are Incorrect !!");
   }

 }



}
