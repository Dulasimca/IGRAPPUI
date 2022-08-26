import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmRegistartionComponent } from './firm-registartion.component';

describe('FirmRegistartionComponent', () => {
  let component: FirmRegistartionComponent;
  let fixture: ComponentFixture<FirmRegistartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmRegistartionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirmRegistartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
