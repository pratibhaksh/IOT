import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerMgmtComponent } from './dealer-mgmt.component';

describe('DealerMgmtComponent', () => {
  let component: DealerMgmtComponent;
  let fixture: ComponentFixture<DealerMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
