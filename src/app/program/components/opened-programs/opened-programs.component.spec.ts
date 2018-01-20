import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedProgramsComponent } from './opened-programs.component';

describe('OpenedProgramsComponent', () => {
  let component: OpenedProgramsComponent;
  let fixture: ComponentFixture<OpenedProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenedProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenedProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
