import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcSearchAndApplyCCComponent } from './ec-search-and-apply-cc.component';

describe('EcSearchAndApplyCCComponent', () => {
  let component: EcSearchAndApplyCCComponent;
  let fixture: ComponentFixture<EcSearchAndApplyCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcSearchAndApplyCCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcSearchAndApplyCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
