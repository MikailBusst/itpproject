import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaWaitComponent } from './aa-wait.component';

describe('AaWaitComponent', () => {
  let component: AaWaitComponent;
  let fixture: ComponentFixture<AaWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
