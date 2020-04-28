import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadReferenceComponent } from './download-reference.component';

describe('DownloadReferenceComponent', () => {
  let component: DownloadReferenceComponent;
  let fixture: ComponentFixture<DownloadReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
