import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyRegistrationComponent } from './edit-company-registration.component';

describe('EditCompanyRegistrationComponent', () => {
  let component: EditCompanyRegistrationComponent;
  let fixture: ComponentFixture<EditCompanyRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompanyRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompanyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
