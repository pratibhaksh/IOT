import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: '',
        redirectTo: 'DealerMgmt',
        pathMatch: 'full',
      },
 
      {
        path: 'DealerMgmt',
        loadChildren: () =>
          import('../dashboard/componets/dealer-mgmt/dealer-mgmt.module').then((m) => m.DealerMgmtModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRouingModule { }
