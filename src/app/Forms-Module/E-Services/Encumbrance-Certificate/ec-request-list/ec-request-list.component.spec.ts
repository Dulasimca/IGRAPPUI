import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcRequestListComponent } from './ec-request-list.component';

describe('EcRequestListComponent', () => {
  let component: EcRequestListComponent;
  let fixture: ComponentFixture<EcRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
