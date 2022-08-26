import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcBirthDeathComponent } from './cc-birth-death.component';

describe('CcBirthDeathComponent', () => {
  let component: CcBirthDeathComponent;
  let fixture: ComponentFixture<CcBirthDeathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcBirthDeathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcBirthDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
