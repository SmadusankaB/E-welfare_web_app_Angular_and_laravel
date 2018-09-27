import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BursaryadminComponent } from './bursaryadmin.component';

describe('BursaryadminComponent', () => {
  let component: BursaryadminComponent;
  let fixture: ComponentFixture<BursaryadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BursaryadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BursaryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
