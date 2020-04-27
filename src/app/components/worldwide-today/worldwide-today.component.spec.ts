import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldwideTodayComponent } from './worldwide-today.component';

describe('WorldwideTodayComponent', () => {
  let component: WorldwideTodayComponent;
  let fixture: ComponentFixture<WorldwideTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldwideTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldwideTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
