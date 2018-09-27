import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BursaryAppComponent } from './bursary-app.component';

describe('BursaryAppComponent', () => {
  let component: BursaryAppComponent;
  let fixture: ComponentFixture<BursaryAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BursaryAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BursaryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
