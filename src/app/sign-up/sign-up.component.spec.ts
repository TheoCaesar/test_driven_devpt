import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

xdescribe('SignUpComponent', () => {
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

xdescribe("Test Signup Component's Layout", ()=>{
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

describe("Interactions" ,()=>{
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let template: HTMLElement;

  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent]
    })
    .compileComponents();
  })

  beforeEach(()=>{
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it ("disable submit initially", ()=>{
    let btn = template.querySelector('button[type="submit"]') as HTMLButtonElement
    expect(btn?.disabled).toBeTruthy()
  })

  it("mocks user interaction with form", ()=>{
    let pwdField = template.querySelector("input[id='password']")  as HTMLInputElement
    let confPwdField = template.querySelector("input[id='confirm']")  as HTMLInputElement
    let submitBtn = template.querySelector('button') as HTMLButtonElement

    //assign values to input fields and mock user input event interaction    
    pwdField.value = "P4ssword"
    pwdField.dispatchEvent(new Event('input'))
    
    confPwdField.value = "P4ssword"
    confPwdField.dispatchEvent(new Event('input'))

    // Trigger change detection to update the DOM and component state
    fixture.detectChanges(); 
    expect(submitBtn.disabled).toBeFalsy();  
  })
})
