import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class SharedModule { }
