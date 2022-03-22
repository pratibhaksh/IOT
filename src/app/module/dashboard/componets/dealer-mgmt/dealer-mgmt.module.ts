import { DealerModule } from './dealer/dealer.module';
import { ThemeModule } from './../../../../_theme/theme.module';
import { RouterModule } from '@angular/router';
import { DealerMgmtRoutingModule } from './dealer-mgmt-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerComponent } from './dealer/dealer.component';
import { DealerAdminComponent } from './dealer-admin/dealer-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DealerComponent,
    DealerAdminComponent
  ],
  imports: [
    CommonModule,
    DealerModule,
    DealerMgmtRoutingModule,
    SharedModule,
    RouterModule,
    
  ]
})
export class DealerMgmtModule { }
