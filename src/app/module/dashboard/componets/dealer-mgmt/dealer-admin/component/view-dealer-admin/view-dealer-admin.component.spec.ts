import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDealerAdminComponent } from './view-dealer-admin.component';

describe('ViewDealerAdminComponent', () => {
  let component: ViewDealerAdminComponent;
  let fixture: ComponentFixture<ViewDealerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDealerAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDealerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
