import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicUtilityFormsComponent } from './public-utility-forms.component';

describe('PublicUtilityFormsComponent', () => {
  let component: PublicUtilityFormsComponent;
  let fixture: ComponentFixture<PublicUtilityFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicUtilityFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicUtilityFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
