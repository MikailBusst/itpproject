import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaApproveComponent } from './aa-approve.component';

describe('AaApproveComponent', () => {
  let component: AaApproveComponent;
  let fixture: ComponentFixture<AaApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
