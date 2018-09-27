import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideEditFormComponent } from './leftside-edit-form.component';

describe('LeftsideEditFormComponent', () => {
  let component: LeftsideEditFormComponent;
  let fixture: ComponentFixture<LeftsideEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsideEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsideEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
