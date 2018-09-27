import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahapolaComponent } from './mahapola.component';

describe('MahapolaComponent', () => {
  let component: MahapolaComponent;
  let fixture: ComponentFixture<MahapolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahapolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahapolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
