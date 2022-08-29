import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineValueComponent } from './guideline-value.component';

describe('GuidelineValueComponent', () => {
  let component: GuidelineValueComponent;
  let fixture: ComponentFixture<GuidelineValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidelineValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidelineValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
