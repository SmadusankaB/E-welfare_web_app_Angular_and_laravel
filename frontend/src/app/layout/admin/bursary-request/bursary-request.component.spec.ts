import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BursaryRequestComponent } from './bursary-request.component';

describe('BursaryRequestComponent', () => {
  let component: BursaryRequestComponent;
  let fixture: ComponentFixture<BursaryRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BursaryRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BursaryRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
