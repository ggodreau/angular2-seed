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
    var BsDropdown;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BsDropdown = (function () {
                function BsDropdown() {
                }
                BsDropdown = __decorate([
                    core_1.Component({
                        selector: 'bs-dropdown',
                        template: "\n        <div class=\"dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle\"  type=\"button\" data-toggle=\"dropdown\">\n                <ng-content style=\".buttonText\"></ng-content>\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">HTML</a></li>\n                <li><a href=\"#\">CSS</a></li>\n                <li><a href=\"#\">JavaScript</a></li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BsDropdown);
                return BsDropdown;
            }());
            exports_1("BsDropdown", BsDropdown);
        }
    }
});
//# sourceMappingURL=dropdown.component.js.map