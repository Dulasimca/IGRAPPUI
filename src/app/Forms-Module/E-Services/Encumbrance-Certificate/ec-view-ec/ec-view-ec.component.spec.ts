import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcViewECComponent } from './ec-view-ec.component';

describe('EcViewECComponent', () => {
  let component: EcViewECComponent;
  let fixture: ComponentFixture<EcViewECComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcViewECComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcViewECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
