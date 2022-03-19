import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDealerAdminComponent } from './component/view-dealer-admin/view-dealer-admin.component';
import { AddDealerAdminComponent } from './component/add-dealer-admin/add-dealer-admin.component';



@NgModule({
  declarations: [
    ViewDealerAdminComponent,
    AddDealerAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DealerAdminModule { }
