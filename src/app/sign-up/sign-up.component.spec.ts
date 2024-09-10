import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let template = fixture.nativeElement as HTMLElement
    let pElement:HTMLParagraphElement | null = template.querySelector("h1")
    expect(pElement?.innerHTML).toContain("Sign Up");
  });
});

describe("Test Signup Component's Layout", ()=>{
  let fixture: ComponentFixture<SignUpComponent>
  let component: SignUpComponent;
  let template: HTMLElement
  
  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      declarations:[SignUpComponent]
    })
    .compileComponents();
  })

  beforeEach(()=>{
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges;
    template = fixture.nativeElement as HTMLElement;
  })

  it('contains a form', ()=>{
    let formEl = template.querySelector('form');
    expect(formEl).toBeTruthy();
  })

  it ('contains inputs for user registration', ()=>{
    let inputs = template.querySelectorAll('input');
    let labels = template.querySelectorAll('label');
    expect(inputs.length).toEqual(labels.length);
    let unameLbl = template.querySelector('label[for="username"]') as HTMLLabelElement
    let emailLbl = template.querySelector('label[for="email"]') as HTMLLabelElement
    let pwdLbl = template.querySelector('label[for="password"]') as HTMLLabelElement
    let pwdLbl2 = template.querySelector('label[for="confirm"]') as HTMLLabelElement
    expect([unameLbl, emailLbl]).toBeTruthy();
    expect([pwdLbl, pwdLbl2]).toBeTruthy();
    let unameField = template.querySelector('input[id="username"]') as HTMLInputElement
    let emailField = template.querySelector('input[type="email"]') as HTMLInputElement
    let pwdField = template.querySelector('input[type="password"]') as HTMLInputElement
    let pwdField2 = template.querySelector('input[id="confirm"]') as HTMLInputElement
    expect([unameField,emailField]).toBeTruthy();
    expect([pwdField, pwdField2]).toBeTruthy();
  })

  it('contains sign up button', ()=>{
    let btn = template.querySelector('button[type="submit"]') as HTMLButtonElement;
    expect(btn?.innerHTML).toContain('Sign Up')
    expect(btn?.disabled).toBeTruthy();
  })
});
