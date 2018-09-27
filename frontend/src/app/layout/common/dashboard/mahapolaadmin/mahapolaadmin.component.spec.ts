import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahapolaadminComponent } from './mahapolaadmin.component';

describe('MahapolaadminComponent', () => {
  let component: MahapolaadminComponent;
  let fixture: ComponentFixture<MahapolaadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahapolaadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahapolaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
