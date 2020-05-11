import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAppendixAComponent } from './submit-appendix-a.component';

describe('SubmitAppendixAComponent', () => {
  let component: SubmitAppendixAComponent;
  let fixture: ComponentFixture<SubmitAppendixAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAppendixAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAppendixAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
