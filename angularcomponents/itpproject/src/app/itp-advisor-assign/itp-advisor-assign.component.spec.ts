import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItpAdvisorAssignComponent } from './itp-advisor-assign.component';

describe('ItpAdvisorAssignComponent', () => {
  let component: ItpAdvisorAssignComponent;
  let fixture: ComponentFixture<ItpAdvisorAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItpAdvisorAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItpAdvisorAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
