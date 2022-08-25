import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjudicationRequestListComponent } from './adjudication-request-list.component';

describe('AdjudicationRequestListComponent', () => {
  let component: AdjudicationRequestListComponent;
  let fixture: ComponentFixture<AdjudicationRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjudicationRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjudicationRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
