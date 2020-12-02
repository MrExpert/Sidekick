import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ExploreContainerComponent } from "./explore-container.component";

import { CallLog } from "@ionic-native/call-log/ngx";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent],
  providers: [CallLog ],
  exports: [ExploreContainerComponent],
})
export class ExploreContainerComponentModule {}
