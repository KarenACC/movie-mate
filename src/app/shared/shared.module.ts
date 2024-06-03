import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MenuComponent } from './menu/menu.component';
import { PercentagePipe } from './pipes/percentage-pipe.pipe';



@NgModule({
  declarations: [
    MenuComponent,
    PercentagePipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    MenuComponent,
    PercentagePipe
  ]
})
export class SharedModule { }
