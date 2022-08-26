import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcSearchAndApplyCcComponent } from './cc-search-and-apply-cc.component';

describe('CcSearchAndApplyCcComponent', () => {
  let component: CcSearchAndApplyCcComponent;
  let fixture: ComponentFixture<CcSearchAndApplyCcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcSearchAndApplyCcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcSearchAndApplyCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
