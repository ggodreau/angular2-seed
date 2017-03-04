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
    var MyZippy;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import { Input } from 'angular2/core';
            MyZippy = (function () {
                function MyZippy() {
                    this.collapsed = true;
                }
                MyZippy.prototype.onClick = function () {
                    console.log("clicked!");
                    this.collapsed = !this.collapsed;
                    console.log(this.collapsed);
                };
                MyZippy = __decorate([
                    core_1.Component({
                        selector: 'my-zippy',
                        styles: ["\n        .zippy {\n            border: 1px solid #ccc;\n        }\n        .greggy {\n            height: 100px;\n            width: 30%;\n            border: 2px blue;\n            border-style: dashed;\n            background-color: lightblue;\n        }\n        .greggy2 {\n            height: 100px;\n            width: 30%;\n            border: 2px red;\n            border-style: dashed;\n            background-color: lightblue;\n        }\n\n        "],
                        template: "\n        <span class=\"zippy\">\n            <ng-content select=\".zipText\"></ng-content>\n        </span>\n        <br>\n        <span *ngIf=collapsed class=\"greggy\">\n            <ng-content select=\".gregText\"></ng-content>\n        </span>\n        <br>\n        <span class=\"greggy2\" (click)=onClick()>\n            <ng-content select=\".gregText2\"></ng-content>\n        </span>\n        <br>\n        <div class=\"greggy\">\n            New Divider\n            <i \n                class=\"pull-right glyphicon\" \n                [ngClass]=\"\n                    { \n                        'glyphicon-chevron-down': !collapsed, \n                        'glyphicon-chevron-up': collapsed \n                    }\">\n            </i>\n            <i \n                class=\"glyphicon glyphicon-cloud\"\n                [ngClass]=\"{\n                                'pull-left': !collapsed,\n                                'pull-right': collapsed\n                            }\">\n           </i>\n        </div>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyZippy);
                return MyZippy;
            }());
            exports_1("MyZippy", MyZippy);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map