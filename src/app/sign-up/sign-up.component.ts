import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor() { }
  username: string = "";
  email: string = "";
  pwd1:string = '';
  pwd2:string = '';
  isDisabled = true

  setUsername(e: Event) {
    this.username = (e.target as HTMLInputElement).value
  }

  setEmail(e: Event) {
    this.email = (e.target as HTMLInputElement).value
  }

  onInputPwd(e:Event) {
    this.pwd1 = (e.target as HTMLInputElement).value
    this.isDisabled = this.pwd1 != this.pwd2
  }

  onInputConfirm(e:Event) {
    this.pwd2 = (e.target as HTMLInputElement).value
    this.isDisabled = this.pwd1 != this.pwd2
  }

  onSubmit(){
    fetch("/api/1.0/users", {
      method:"POST",
      body: JSON.stringify({
        username: this.username,
        email: this.email,
        password1: this.pwd1,
        password2: this.pwd2
      })
    })
  }
  ngOnInit(): void {
  }
}
