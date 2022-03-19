import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealerAdminComponent } from './add-dealer-admin.component';

describe('AddDealerAdminComponent', () => {
  let component: AddDealerAdminComponent;
  let fixture: ComponentFixture<AddDealerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDealerAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDealerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
