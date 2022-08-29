import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyAndFeesComponent } from './duty-and-fees.component';

describe('DutyAndFeesComponent', () => {
  let component: DutyAndFeesComponent;
  let fixture: ComponentFixture<DutyAndFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DutyAndFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DutyAndFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
