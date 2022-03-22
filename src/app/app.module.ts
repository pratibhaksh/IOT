import { DealerMgmtComponent } from './module/dashboard/componets/dealer-mgmt/dealer-mgmt.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './module/_core/core.module';
import { ThemeModule } from './_theme/theme.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DashboardComponent } from './module/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    DashboardModule,
    CoreModule,
    AppRoutingModule,
    ThemeModule,
    MaterialModule,
      ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }
