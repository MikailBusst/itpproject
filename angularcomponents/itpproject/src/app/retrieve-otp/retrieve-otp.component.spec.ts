import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveOtpComponent } from './retrieve-otp.component';

describe('RetrieveOtpComponent', () => {
  let component: RetrieveOtpComponent;
  let fixture: ComponentFixture<RetrieveOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
