<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> 8e3ee2485ded42687a27941622c40f9e7fe22f09
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
<<<<<<< HEAD
    CommonModule,
    RouterModule
=======
    CommonModule
>>>>>>> 8e3ee2485ded42687a27941622c40f9e7fe22f09
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ]
})
export class ThemeModule { }
