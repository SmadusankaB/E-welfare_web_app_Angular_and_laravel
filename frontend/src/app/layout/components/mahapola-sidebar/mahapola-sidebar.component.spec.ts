import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahapolaSidebarComponent } from './mahapola-sidebar.component';

describe('MahapolaSidebarComponent', () => {
  let component: MahapolaSidebarComponent;
  let fixture: ComponentFixture<MahapolaSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahapolaSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahapolaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
