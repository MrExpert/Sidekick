import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { Onboarding1Component } from "../onboarding1/onboarding1.component";
import { Onboarding2Component } from "../onboarding2/onboarding2.component";
import { TopfiveComponent } from "../topfive/topfive.component";
import { Tab1PageRoutingModule } from "./tab1-routing.module";
import { SetgoalsComponent } from "../setgoals/setgoals.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [
    Tab1Page,
    Onboarding1Component,
    Onboarding2Component,
    TopfiveComponent,
    SetgoalsComponent
  ],
})
export class Tab1PageModule {}
