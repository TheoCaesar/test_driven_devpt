import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor() { }
  pwd1:string = '';
  pwd2:string = '';
  isDisabled = true

  onInputPwd(e:Event) {
    this.pwd1 = (e.target as HTMLInputElement).value
    this.isDisabled = this.pwd1 != this.pwd2
  }

  onInputConfirm(e:Event) {
    this.pwd2 = (e.target as HTMLInputElement).value
    this.isDisabled = this.pwd1 != this.pwd2
  }

  ngOnInit(): void {
  }
}
