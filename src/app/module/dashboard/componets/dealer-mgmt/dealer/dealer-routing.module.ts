import { AddDealerComponent } from './componet/add-dealer/add-dealer.component';
import { ViewDealerComponent } from './componet/view-dealer/view-dealer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: ViewDealerComponent
  },
  {

    path: 'dealer/view-dealer',
    // canActivate: [AuthGuard],
    component: ViewDealerComponent,
  },
  {

    path: 'add-new-dealer',
    // canActivate: [AuthGuard],
    component: AddDealerComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerRoutingModule { }
