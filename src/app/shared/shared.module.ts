import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPaginationDirective } from './custome-pagination.directive';



@NgModule({
  declarations: [
    CustomPaginationDirective
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    CustomPaginationDirective
  ],
})
export class SharedModule { }
