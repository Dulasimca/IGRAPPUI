import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTokenAvailabilityComponent } from './view-token-availability.component';

describe('ViewTokenAvailabilityComponent', () => {
  let component: ViewTokenAvailabilityComponent;
  let fixture: ComponentFixture<ViewTokenAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTokenAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTokenAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
