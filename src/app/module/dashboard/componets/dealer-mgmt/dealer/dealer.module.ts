import { MaterialModule } from './../../../../../material/material.module';
import { DealerRoutingModule } from './dealer-routing.module';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDealerComponent } from './componet/view-dealer/view-dealer.component';
import { AddDealerComponent } from './componet/add-dealer/add-dealer.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    ViewDealerComponent,
    AddDealerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DealerRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class DealerModule { }
