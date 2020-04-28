import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItpAdvisorComponent } from './itp-advisor.component';

describe('ItpAdvisorComponent', () => {
  let component: ItpAdvisorComponent;
  let fixture: ComponentFixture<ItpAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItpAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItpAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
