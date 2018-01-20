import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTreeComponent } from './program-tree.component';

describe('NavigationTreeComponent', () => {
  let component: ProgramTreeComponent;
  let fixture: ComponentFixture<ProgramTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
