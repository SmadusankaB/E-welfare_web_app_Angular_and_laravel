import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BursarySidebarComponent } from './bursary-sidebar.component';

describe('BursarySidebarComponent', () => {
  let component: BursarySidebarComponent;
  let fixture: ComponentFixture<BursarySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BursarySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BursarySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
