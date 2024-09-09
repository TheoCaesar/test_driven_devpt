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
    let pElement:HTMLParagraphElement | null = template.querySelector("p")
    expect(pElement?.innerHTML).toContain("sign-up works!");
    expect(pElement?.innerHTML).toContain("sign-up works!");
  });
});
