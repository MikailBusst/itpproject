import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItpAdvisorAssignedComponent } from './itp-advisor-assigned.component';

describe('ItpAdvisorAssignedComponent', () => {
  let component: ItpAdvisorAssignedComponent;
  let fixture: ComponentFixture<ItpAdvisorAssignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItpAdvisorAssignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItpAdvisorAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
