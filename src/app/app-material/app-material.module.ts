import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: []
})
export class AppMaterialModule { }
