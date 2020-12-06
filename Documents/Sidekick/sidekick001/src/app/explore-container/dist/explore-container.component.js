"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ExploreContainerComponent = /** @class */ (function () {
    function ExploreContainerComponent(callLog) {
        this.callLog = callLog;
    }
    ExploreContainerComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], ExploreContainerComponent.prototype, "name");
    ExploreContainerComponent = __decorate([
        core_1.Component({
            selector: "app-explore-container",
            templateUrl: "./explore-container.component.html",
            styleUrls: ["./explore-container.component.scss"]
        })
    ], ExploreContainerComponent);
    return ExploreContainerComponent;
}());
exports.ExploreContainerComponent = ExploreContainerComponent;
var HomePage = /** @class */ (function () {
    function HomePage(callLog, callNumber, platform) {
        var _this = this;
        this.callLog = callLog;
        this.callNumber = callNumber;
        this.platform = platform;
        this.platform.ready().then(function () {
            _this.callLog
                .hasReadPermission()
                .then(function (hasPermission) {
                if (!hasPermission) {
                    _this.callLog
                        .requestReadPermission()
                        .then(function (results) {
                        _this.getContacts("type", "1", "==");
                    })["catch"](function (e) {
                        return alert(" requestReadPermission " + JSON.stringify(e));
                    });
                }
                else {
                    _this.getContacts("type", "1", "==");
                }
            })["catch"](function (e) { return alert(" hasReadPermission " + JSON.stringify(e)); });
        });
    }
    HomePage.prototype.getContacts = function (name, value, operator) {
        var _this = this;
        if (value == "1") {
            this.listTyle = "Incoming Calls from yesterday";
        }
        else if (value == "2") {
            this.listTyle = "Ougoing Calls from yesterday";
        }
        else if (value == "5") {
            this.listTyle = "Rejected Calls from yesterday";
        }
        //Getting Yesterday Time
        var today = new Date();
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        var fromTime = yesterday.getTime();
        this.filters = [
            {
                name: name,
                value: value,
                operator: operator
            },
            {
                name: "date",
                value: fromTime.toString(),
                operator: ">="
            },
        ];
        this.callLog
            .getCallLog(this.filters)
            .then(function (results) {
            _this.recordsFoundText = JSON.stringify(results);
            _this.recordsFound = results; //JSON.stringify(results);
        })["catch"](function (e) { return alert(" LOG " + JSON.stringify(e)); });
    };
    HomePage.prototype.callThisNumber = function (number) {
        this.callNumber
            .callNumber(number, true)
            .then(function (res) { return console.log("Launched dialer!", res); })["catch"](function (err) { return console.log("Error launching dialer", err); });
    };
    return HomePage;
}());
exports.HomePage = HomePage;

//# sourceMappingURL=explore-container.component.js.map
