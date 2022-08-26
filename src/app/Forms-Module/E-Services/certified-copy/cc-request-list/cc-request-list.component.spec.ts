import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcRequestListComponent } from './cc-request-list.component';

describe('CcRequestListComponent', () => {
  let component: CcRequestListComponent;
  let fixture: ComponentFixture<CcRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
