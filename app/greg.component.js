System.register(['angular2/core', './getpic.service'], function(exports_1, context_1) {
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
    var core_1, getpic_service_1;
    var GregComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (getpic_service_1_1) {
                getpic_service_1 = getpic_service_1_1;
            }],
        execute: function() {
            GregComponent = (function () {
                function GregComponent(getPicService) {
                    this.isHairy = ["yesHeIsnt"];
                    this.totalLikes = 0;
                    this.iLike = false;
                    this.myClass = "glyphicon-arrow-right";
                    this.greg = 'foo';
                    this.pics = [];
                    this.pics = getPicService.getPic();
                    this.greg = getPicService.getGreg();
                    //        this.gregWorld = this.getPicService.getGreg();
                }
                GregComponent.prototype.onClick = function () {
                    this.myClass = 'glyphicon-arrow-left';
                    this.iLike = !this.iLike;
                    this.totalLikes = this.iLike ? 1 : 0;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], GregComponent.prototype, "isHairy", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], GregComponent.prototype, "totalLikes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], GregComponent.prototype, "iLike", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], GregComponent.prototype, "myClass", void 0);
                GregComponent = __decorate([
                    core_1.Component({
                        selector: 'greg',
                        template: "\n    <div class=\"media\">\n        <div class=\"media-left\">\n            <a href=\"#\">\n                <img class=\"media-object\" src=\"http://lorempixel.com/100/100/people?1\" alt=\"buttheads\">\n            </a>\n        </div>\n        <div class=\"media-body\">\n            <h4 class=\"media-heading\">Angular JS News</h4>\n            <ul>\n                <li>list1</li>\n                <li>{{ isHairy }}</li>\n                <li>{{ greg }}</li>\n            </ul>\n            Media Body Here<br>\n            <i class=\"glyphicon glyphicon-heart\"></i>\n        </div>\n    </div>\n    ",
                        styles: ["\n        .glyphicon-heart {\n            color: deeppink;\n        }\n    "],
                        providers: [getpic_service_1.GetPicService]
                    }), 
                    __metadata('design:paramtypes', [getpic_service_1.GetPicService])
                ], GregComponent);
                return GregComponent;
            }());
            exports_1("GregComponent", GregComponent);
        }
    }
});
//# sourceMappingURL=greg.component.js.map