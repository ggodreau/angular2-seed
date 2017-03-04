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
    var MyGippy;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyGippy = (function () {
                function MyGippy() {
                    this.toggleState = false;
                }
                MyGippy.prototype.onClick = function () {
                    this.toggleState = !this.toggleState;
                };
                MyGippy = __decorate([
                    core_1.Component({
                        selector: 'my-gippy',
                        styles: ["\n        .shaded {\n            border: 1px solid red;\n        }\n        .opened {\n            border: 1px solid blue;\n            background-color: lightblue;\n        }\n        .neutral {\n            border: 2px green;\n            border-radius: 2px;\n        }\n    "],
                        template: "\n        <div class=\"shaded\" (click)=onClick()>\n            element header\n            <i \n                class=\"pull-right glyphicon\"\n                [ngClass]=\"{\n                    'glyphicon-thumbs-up' : !toggleState,\n                    'glyphicon-thumbs-down' : toggleState\n                }\">\n            </i>\n        </div>\n        <div class=\"opened\" *ngIf=\"toggleState\">shaded section</div>\n        <div class=\"neutral\">neutral div yo</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyGippy);
                return MyGippy;
            }());
            exports_1("MyGippy", MyGippy);
        }
    }
});
//# sourceMappingURL=gippy.component.js.map