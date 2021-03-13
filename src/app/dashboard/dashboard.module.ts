import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';

@NgModule({
  declarations: [DashboardRootComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  entryComponents: [],
})
export class DashboardModule {}
