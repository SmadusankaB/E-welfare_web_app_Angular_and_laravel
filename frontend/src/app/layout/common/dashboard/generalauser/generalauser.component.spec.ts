import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralauserComponent } from './generalauser.component';

describe('GeneralauserComponent', () => {
  let component: GeneralauserComponent;
  let fixture: ComponentFixture<GeneralauserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralauserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
