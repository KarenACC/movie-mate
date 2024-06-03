import { NgModule } from '@angular/core';


import { RippleModule } from 'primeng/ripple';
import { PrimeNGConfig } from 'primeng/api';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';



@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,

    RippleModule,
  ]
})
export class PrimeNgModule { }
