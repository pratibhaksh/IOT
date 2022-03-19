import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerComponent } from './dealer/dealer.component';
import { DealerAdminComponent } from './dealer-admin/dealer-admin.component';



@NgModule({
  declarations: [
    DealerComponent,
    DealerAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DealerMgmtModule { }
