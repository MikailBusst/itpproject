import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedownloadReferenceComponent } from './redownload-reference.component';

describe('RedownloadReferenceComponent', () => {
  let component: RedownloadReferenceComponent;
  let fixture: ComponentFixture<RedownloadReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedownloadReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedownloadReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
