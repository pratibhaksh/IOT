import { DashboardRouingModule } from './dashboard-rouing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { ThemeModule } from 'src/app/_theme/theme.module';
import { CoreModule } from '../_core/core.module';
import { DealerMgmtComponent } from './componets/dealer-mgmt/dealer-mgmt.component';
import { VendorMgmtComponent } from './componets/vendor-mgmt/vendor-mgmt.component';



@NgModule({
  declarations: [
    DealerMgmtComponent,
    VendorMgmtComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRouingModule,     
    CoreModule, 
    ThemeModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
