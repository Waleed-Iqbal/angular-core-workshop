import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { MaterialModule } from '@workshop/material';

@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule, CustomersRoutingModule, MaterialModule],
})
export class CustomersModule {}
