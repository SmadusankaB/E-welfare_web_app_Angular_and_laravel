import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchFormComponent } from './advanced-search-form.component';

describe('AdvancedSearchFormComponent', () => {
  let component: AdvancedSearchFormComponent;
  let fixture: ComponentFixture<AdvancedSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
