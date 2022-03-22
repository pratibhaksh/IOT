import { DashboardRouingModule } from './dashboard-rouing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { ThemeModule } from 'src/app/_theme/theme.module';
import { CoreModule } from '../_core/core.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
 DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRouingModule,     
    ThemeModule,
    CoreModule, 
    HttpClientModule
  ]
})
export class DashboardModule { }
