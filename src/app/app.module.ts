import { DashboardModule } from './module/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './module/_core/core.module';
import { ThemeModule } from './_theme/theme.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './_theme/footer/footer.component';
import { HeaderComponent } from './_theme/header/header.component';
import { SideBarComponent } from './_theme/side-bar/side-bar.component';
import { DealerComponent } from './module/dealer/dealer.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './module/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DealerComponent,
    DashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreModule,
    AppRoutingModule,
    ThemeModule,
    DashboardModule
    // NgbModule
    // RouterModule,
    // CoreModule,
    // AppRoutingModule,
    // ThemeModule,
    // NgbModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }
