import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardDay1Component } from '../dashboard-day1/dashboard-day1.component'
import { DashboardDay6Component } from '../dashboard-day6/dashboard-day6.component'
import { DashboardCongratsComponent } from '../dashboard-congrats/dashboard-congrats.component'




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page, DashboardComponent, DashboardDay1Component, DashboardDay6Component, DashboardCongratsComponent]
})
export class Tab3PageModule {}
