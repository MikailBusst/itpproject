import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerVerificationComponent } from './disclaimer-verification.component';

describe('DisclaimerVerificationComponent', () => {
  let component: DisclaimerVerificationComponent;
  let fixture: ComponentFixture<DisclaimerVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
