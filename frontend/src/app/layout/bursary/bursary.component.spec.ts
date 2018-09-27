import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BursaryComponent } from './bursary.component';

describe('BursaryComponent', () => {
  let component: BursaryComponent;
  let fixture: ComponentFixture<BursaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BursaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BursaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
