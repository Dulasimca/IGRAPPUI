import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PWDCalculatorComponent } from './pwd-calculator.component';

describe('PWDCalculatorComponent', () => {
  let component: PWDCalculatorComponent;
  let fixture: ComponentFixture<PWDCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PWDCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PWDCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
