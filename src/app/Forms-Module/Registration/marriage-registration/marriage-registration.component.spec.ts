import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageRegistrationComponent } from './marriage-registration.component';

describe('MarriageRegistrationComponent', () => {
  let component: MarriageRegistrationComponent;
  let fixture: ComponentFixture<MarriageRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriageRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriageRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
