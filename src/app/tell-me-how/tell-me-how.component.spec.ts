import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellMeHowComponent } from './tell-me-how.component';

describe('TellMeHowComponent', () => {
  let component: TellMeHowComponent;
  let fixture: ComponentFixture<TellMeHowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TellMeHowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TellMeHowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
