import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBackgroundComponent } from './landing-background.component';

describe('LandingBackgroundComponent', () => {
  let component: LandingBackgroundComponent;
  let fixture: ComponentFixture<LandingBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
