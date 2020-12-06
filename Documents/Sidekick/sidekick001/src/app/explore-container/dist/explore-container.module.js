"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var explore_container_component_1 = require("./explore-container.component");
var ngx_1 = require("@ionic-native/call-log/ngx");
var ExploreContainerComponentModule = /** @class */ (function () {
    function ExploreContainerComponentModule() {
    }
    ExploreContainerComponentModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, angular_1.IonicModule],
            declarations: [explore_container_component_1.ExploreContainerComponent],
            providers: [ngx_1.CallLog],
            exports: [explore_container_component_1.ExploreContainerComponent]
        })
    ], ExploreContainerComponentModule);
    return ExploreContainerComponentModule;
}());
exports.ExploreContainerComponentModule = ExploreContainerComponentModule;

//# sourceMappingURL=explore-container.module.js.map
