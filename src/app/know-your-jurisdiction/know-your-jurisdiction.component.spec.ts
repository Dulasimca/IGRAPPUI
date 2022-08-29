import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourJurisdictionComponent } from './know-your-jurisdiction.component';

describe('KnowYourJurisdictionComponent', () => {
  let component: KnowYourJurisdictionComponent;
  let fixture: ComponentFixture<KnowYourJurisdictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowYourJurisdictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowYourJurisdictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
