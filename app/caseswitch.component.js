System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CaseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CaseComponent = (function () {
                function CaseComponent() {
                    this.viewMode = 'map';
                }
                CaseComponent.prototype.onClick = function ($event) {
                    console.log("clicked!", $event);
                };
                CaseComponent = __decorate([
                    core_1.Component({
                        selector: 'case-element',
                        template: "\n        <h1>caseswitch header</h1>\n        <ul class=\"nav nav-pills\">\n            <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode = 'map'\">Map View</a></li>\n            <li [class.active]=\"viewMode == 'icon'\"><a (click)=\"viewMode = 'icon'\">Icon View</a></li>\n        </ul>\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault>Map View Content</template>\n            <template [ngSwitchWhen]=\"'icon'\">Icon View Content</template>\n        </div>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CaseComponent);
                return CaseComponent;
            }());
            exports_1("CaseComponent", CaseComponent);
        }
    }
});
//# sourceMappingURL=caseswitch.component.js.map