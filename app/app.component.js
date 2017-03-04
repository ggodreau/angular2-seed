System.register(['angular2/core', './courses.component', './like.component', './greg.component', './caseswitch.component', './ngfor.component', './bspanel.component', './dropdown.component', './zippy.component', './gippy.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, like_component_1, greg_component_1, caseswitch_component_1, ngfor_component_1, bspanel_component_1, dropdown_component_1, zippy_component_1, gippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (greg_component_1_1) {
                greg_component_1 = greg_component_1_1;
            },
            function (caseswitch_component_1_1) {
                caseswitch_component_1 = caseswitch_component_1_1;
            },
            function (ngfor_component_1_1) {
                ngfor_component_1 = ngfor_component_1_1;
            },
            function (bspanel_component_1_1) {
                bspanel_component_1 = bspanel_component_1_1;
            },
            function (dropdown_component_1_1) {
                dropdown_component_1 = dropdown_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (gippy_component_1_1) {
                gippy_component_1 = gippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Heading Section</h1>\n        <!--\n        <my-ngFor></my-ngFor>\n        <case-element></case-element>\n        <courses></courses>\n        <like></like>\n        <greg [isHairy] = 3></greg>\n        <greg></greg>\n        -->\n        <bs-panel>\n            <div class=\"heading\">This is the heading!</div>\n            <div class=\"panel\">This is the panel!</div>\n        </bs-panel>\n        <!--<bs-dropdown><div class=\"buttonText\">Hello</div></bs-dropdown>\n        <my-zippy>\n            <span class=\"zipText\">Hello Zippy!</span>\n            <span class=\"gregText\">Hello Greggy 1!</span>\n            <span class=\"gregText2\">Hello Greggy 2!</span>\n        </my-zippy>\n        -->\n        <my-gippy></my-gippy>\n    ",
                        directives: [
                            courses_component_1.CoursesComponent,
                            like_component_1.LikeComponent,
                            greg_component_1.GregComponent,
                            caseswitch_component_1.CaseComponent,
                            ngfor_component_1.ngForComponent,
                            bspanel_component_1.BsPanel,
                            dropdown_component_1.BsDropdown,
                            zippy_component_1.MyZippy,
                            gippy_component_1.MyGippy
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map